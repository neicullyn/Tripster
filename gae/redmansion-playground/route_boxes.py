import urllib2
import json
import base64
import struct
import itertools
import google_maps
import copy
import YelpQueryConcurrent as yqcc
import time
import math
import random
# from multiprocessing import dummy


# import matplotlib.pyplot as plt

def xfrange(start, stop, step):
    while start < stop:
        yield start
        start += step
        
class route_boxes:
    def __init__(self, route, box_size, K):
        # Generate Boxes       
        
        self.route = route
        
        self.lat, self.lon = zip(*self.route)
        
        self.box_size = box_size
        self.lat_max = max(self.lat) + 2 * box_size
        self.lat_min = min(self.lat) - 3 * box_size
        self.lon_max = max(self.lon) + 2 * box_size 
        self.lon_min = min(self.lon) - 3 * box_size
        
        self.K = K
        
        
        self.generate_boxes()
        self.color_boxes()
        self.extend_color_boxes()
        self.K_means()
        
#         self.merge_boxes()
            
    def generate_boxes(self):        
        self.lat_space = [val for val in xfrange(self.lat_min, self.lat_max, self.box_size)]
        self.lon_space = [val for val in xfrange(self.lon_min, self.lon_max, self.box_size)]             
        self.boxes_matrix = [[(u,v) for v in self.lon_space] for u in self.lat_space]
        
    def _get_index(self, point):
        u, v = point
        i = int((u - self.lat_min) / self.box_size)
        j = int((v - self.lon_min) / self.box_size)
        return i, j
    
    def color_boxes(self):
        if len(self.route) == 0:
            return
        
        self.color = [[False for v in range(len(self.lon_space))] for u in range(len(self.lat_space))]
        
        i, j = self._get_index(self.route[0])
        self.color[i][j] = True
        for k in range(1, len(self.route)):
            pre_i, pre_j = i, j
            
            i, j = self._get_index(self.route[k])
            self.color[i][j] = True
            
            # the two points are adjacent if and only if abs(i - pre_i) > 1 or abs(j - pre_j) > 1
            d_i = i - pre_i
            d_j = j - pre_j
            
            if abs(d_i) > 1 or abs(d_j) > 1:
                # the two points are not adjacent
                # need to fill the boxes between them
                
                if abs(d_i) == abs(d_j) or d_i == 0 or d_j == 0:
                    # special case : 45 degree, vertical, horizontal

                    if abs(d_i) > 0 : 
                        step_i = d_i / abs(d_i)
                    else:
                        step_i = 0
                        
                    if abs(d_j) > 0:
                        step_j = d_j / abs(d_j)
                    else:
                        step_j = 0
                        
                    while pre_i != i or pre_j != j:
                        pre_i = pre_i + step_i
                        pre_j = pre_j + step_j
                        self.color[pre_i][pre_j] = True
                else:
                    # general case
                    # calculate equation a * i + j + c = 0

                    i_r = (self.route[k][0] - self.lat_min) / self.box_size
                    j_r = (self.route[k][1] - self.lon_min) / self.box_size
                    pre_i_r = (self.route[k-1][0] - self.lat_min) / self.box_size
                    pre_j_r = (self.route[k-1][1] - self.lon_min) / self.box_size
                                        
                    d_i_r = i_r - pre_i_r
                    d_j_r = j_r - pre_j_r
                    

                    a = - 1.0 * d_j_r / d_i_r
                    c = - a * i_r - j_r
                    f = lambda x, y : abs(a * (x + 0.5) + (y + 0.5) + c)
                    
                    # note that abs(d_i) != 0, abs(d_j) != 0
                    step_i = d_i / abs(d_i)
                    step_j = d_j / abs(d_j)
                    while pre_i != i and pre_j != j:
                        next_i = pre_i + step_i
                        next_j = pre_j + step_j
                                               
                        if abs(f(next_i, pre_j) - f(pre_i, next_j)) < 1e-6:
                            pre_i = next_i
                            pre_j = next_j                            
                        if f(next_i, pre_j) < f(pre_i, next_j):
                            pre_i = next_i
                        else:
                            pre_j = next_j                            

                        self.color[pre_i][pre_j] = True             
                    
                    while pre_i != i:
                        pre_i = pre_i + step_i
                        self.color[pre_i][pre_j] = True
                                  
                    while pre_j != j:
                        pre_j = pre_j + step_j
                        self.color[pre_i][pre_j] = True
        pass
    
    def extend_color_boxes(self):
        if len(self.route) == 0:
            return
        
        self.extend_color = copy.deepcopy(self.color)
        
        visited = set()
        stack = []
        i, j = self._get_index(self.route[0])
        stack.append((i,j))
        while len(stack) > 0:
            i, j = stack.pop()
            visited.add((i, j))
            offset_dict = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1), (-2, 0), (2, 0), (0, 2), (0, -2)] # 
            for offset in offset_dict:
                vi = i + offset[0]
                vj = j + offset[1]
                self.extend_color[vi][vj] = True
                if self.color[vi][vj] == True and (vi, vj) not in visited:
                    stack.append((vi, vj))
                    
    def merge_boxes(self):
        
        boxes_list = [[] for v in range(len(self.lon_space))]
        current_head = -1
        for j in range(len(self.lon_space)):
            current_col = boxes_list[j]
            for i in range(len(self.lat_space)):
                if self.extend_color[i][j] == True:
                    if current_head == -1:
                        current_head = i
                else:
                    if current_head != -1:
                        current_col.append((current_head, i - 1))                        
                        current_head = -1
            if current_head != -1:
                current_col.append((current_head, len(self.lat_space)-1))
                current_head = -1
                
        self.col_merge = boxes_list
          
        boxes_list = copy.deepcopy(self.col_merge)
        
        self.col_merge_list = []
        
        for j in range(len(self.lon_space) - 1):
            for x in boxes_list[j]:
                begin = (x[0], j)
                end = (x[1], j)
                flag = True
                k = j + 1
                while flag and k < len(self.lon_space):
                    flag = False
                    for y in boxes_list[k]:
                        if y[0] == x[0] and y[1] == x[1]:
                            end = (x[1], k)
                            flag = True
                            boxes_list[k].remove(y)
                        elif y[0] > x[0]:
                            break
                    k += 1
                self.col_merge_list.append((begin, end)) 
          
        boxes_list = [[] for u in range(len(self.lat_space))]
        current_head = -1
        for i in range(len(self.lat_space)):
            current_row = boxes_list[i]
            for j in range(len(self.lon_space)):
                if self.extend_color[i][j] == True:
                    if current_head == -1:
                        current_head = j
                else:
                    if current_head != -1:
                        current_row.append((current_head, j - 1))                        
                        current_head = -1
            if current_head != -1:
                current_row.append((current_head, len(self.lon_space)-1))
                current_head = -1
                
        self.row_merge = boxes_list  
        
        boxes_list = copy.deepcopy(self.row_merge)
        
        self.row_merge_list = []
        
        for i in range(len(self.lat_space) - 1):
            for x in boxes_list[i]:
                begin = (i, x[0])
                end = (i, x[1])
                flag = True
                k = i + 1
                while flag and k < len(self.lat_space):
                    flag = False
                    for y in boxes_list[k]:
                        if y[0] == x[0] and y[1] == x[1]:
                            end = (k, x[1])
                            flag = True
                            boxes_list[k].remove(y)
                        elif y[0] > x[0]:
                            break
                    k += 1
                self.row_merge_list.append((begin, end)) 
                
    def get_dist1(self, box0, box1):
        return math.sqrt((box0[0] - box1[0]) ** 2 + (box0[1] - box1[1]) ** 2) 
    
    def get_dist2(self, box0, box1):
        R = 6371000
        ph0 = ((box0[0] + 0.5) * self.box_size + self.lat_min) / 180 * math.pi
        ph1 = ((box1[0] + 0.5) * self.box_size + self.lat_min) / 180 * math.pi
        lam = ((box0[1] - box1[1]) * self.box_size) / 180 * math.pi
        a = math.sin((ph0 - ph1) / 2)  ** 2 + math.cos(ph0) * math.cos(ph1) * (math.sin(lam / 2) ** 2)
        c = 2 * math.atan2(math.sqrt(a), math.  sqrt(1-a))
        d = R * c
        return d
    
    def K_means(self):
        boxes_list = []
        for i, row in enumerate(self.color):
            for j, e in enumerate(row):
                if e == True:
                    boxes_list.append((i, j))
                    
        boxes_flag_list = [-1 for box in boxes_list]                 
        centers = [boxes_list[i * len(boxes_list) / self.K] for i in xrange(self.K)]
#         centers = random.sample(boxes_list, self.K)
        
        flag = True
        i_iter = 0
        try:
            while flag == True:
                i_iter += 1
                print i_iter
                flag = False
                for i, box in enumerate(boxes_list):
    #                 dist_centers = [1.0 * (box[0] - cen[0]) * (box[0] - cen[0]) + (box[1] - cen[1]) * (box[1] - cen[1]) for cen in centers]
#                     beta = 2
#                     dist_centers = [pow(abs(box[0] - cen[0]), beta) + pow(abs(box[1] - cen[1]), beta) for cen in centers]
                    dist_centers = [self.get_dist2(box, cen) for cen in centers]
                    new_center = min([(dist, j) for j, dist in enumerate(dist_centers)])[1]
                    if boxes_flag_list[i] != new_center:
                        flag = True
                    boxes_flag_list[i] = new_center
                    
                for i in xrange(len(centers)):
    #                 print i
                    index = [j for j in xrange(len(boxes_list)) if boxes_flag_list[j] == i]
                    x = 1.0 * sum([boxes_list[j][0] for j in index]) / len(index)
                    y = 1.0 * sum([boxes_list[j][1] for j in index]) / len(index)
                    centers[i] = x, y
        except ZeroDivisionError:
            print "The number of centers is too large. K-means fails."
        
        k = 0.8
        
        dists = []
        for i, c1 in enumerate(centers):
            dist = min([self.get_dist1(c1, c2) for j , c2 in enumerate(centers) if i != j])
            dists.append(dist)
        radius1 = k * max(dists)
        
        dists = []
        for i, c1 in enumerate(centers):
            dist = min([self.get_dist2(c1, c2) for j , c2 in enumerate(centers) if i != j])
            dists.append(dist)            
        radius2 = k * max(dists)  
            
        self.radius1 = radius1
        self.radius2 = radius2
        self.centers = centers
        
    def box_num_to_ll(self, box_num):
        return (box_num[0] * self.box_size + self.lat_min, box_num[1] * self.box_size + self.lon_min)
    
    def box_num_to_ll2(self, box_num):
        return (box_num[0] * self.box_size + self.lat_min + self.box_size, box_num[1] * self.box_size + self.lon_min + self.box_size)

    def box_num_to_ll3(self, box_num):
        return (box_num[0] * self.box_size + self.lat_min + 0.5 * self.box_size, box_num[1] * self.box_size + self.lon_min + 0.5 * self.box_size)
    
#     def _query_func(self, sw, ne, catagory):
#         d = {}
#         
#         q = yelp_query.YelpQuery()            
#         
#         rst = q.query_by_bounds(sw[0], sw[1], ne[0], ne[1], limit = 20, term=catagory);
#         
#         for x in rst['businesses']:
#             d[x['id']] = x
#             
#         if rst['total'] > 20:
#             rst = q.query_by_bounds(sw[0], sw[1], ne[0], ne[1], limit = 20, offset=20, term=catagory);
#             for x in rst['businesses']:
#                 d[x['id']] = x
#                 
#         return d
    
    def query(self, catagory):
        para_list = []
        
        q = yqcc.YelpQueryConcurrent()
        
        for cen in self.centers:   
            ll = self.box_num_to_ll2(cen)
            para_list.append((ll, self.radius2, 0,catagory, 20))
            para_list.append((ll, self.radius2, 20,catagory, 20))
        
        rtns = q.query_by_ll(para_list)

        d = {}
        for rtn in rtns:
            b = rtn['businesses']
            for entry in b:
                d[entry['id']] = entry
        return d
        
        
    def draw_boxes(self, gca, method=0):
        if method == 0:
            for i in xrange(len(self.boxes_matrix)):
                for j in xrange(len(self.boxes_matrix[0])):
                    box = self.boxes_matrix[i][j]
                    # box is (latitude, longitude), so we need to reverse the order
                    gca.add_patch(plt.Rectangle((box[1], box[0]), self.box_size, self.box_size, fill=False))
                    
        if method == 1:        
            for i in xrange(len(self.boxes_matrix)):
                for j in xrange(len(self.boxes_matrix[0])):
                    box = self.boxes_matrix[i][j]
                    fill = self.color[i][j]
                    gca.add_patch(plt.Rectangle((box[1], box[0]), self.box_size, self.box_size, fill=fill))
        
        if method == 2:
            for i in xrange(len(self.boxes_matrix)):
                for j in xrange(len(self.boxes_matrix[0])):
                    box = self.boxes_matrix[i][j]
                    fill = self.extend_color[i][j]
                    gca.add_patch(plt.Rectangle((box[1], box[0]), self.box_size, self.box_size, fill=fill))
                    
        if method == 3:
            for j in range(len(self.col_merge)):
                for x in self.col_merge[j]:
                    begin = x[0]
                    end = x[1]
                    length = x[1] - x[0] + 1
                     
                    begin_box = self.boxes_matrix[begin][j]
                    gca.add_patch(plt.Rectangle((begin_box[1], begin_box[0]), self.box_size, (x[1] - x[0] + 1) * self.box_size, fill=True))
        
        if method == 4:
            for i in range(len(self.row_merge)):
                for x in self.row_merge[i]:
                    begin = x[0]
                    end = x[1]
                    length = x[1] - x[0] + 1
                     
                    begin_box = self.boxes_matrix[i][begin]
                    gca.add_patch(plt.Rectangle((begin_box[1], begin_box[0]), (x[1] - x[0] + 1) * self.box_size, self.box_size, fill=True))
                     
        if method == 5:
            for begin, end in self.col_merge_list:
                begin_box = self.boxes_matrix[begin[0]][begin[1]]
                y_size = end[0] - begin[0] + 1
                x_size = end[1] - begin[1] + 1
                gca.add_patch(plt.Rectangle((begin_box[1], begin_box[0]), x_size * self.box_size, y_size * self.box_size, fill=True))
        
        if method == 6:
            for begin, end in self.row_merge_list:
                begin_box = self.boxes_matrix[begin[0]][begin[1]]
                y_size = end[0] - begin[0] + 1
                x_size = end[1] - begin[1] + 1
                gca.add_patch(plt.Rectangle((begin_box[1], begin_box[0]), x_size * self.box_size, y_size * self.box_size, fill=True))
        
        if method == 7:
            for box in self.centers:
                y = (box[0] + 0.5) * self.box_size + self.lat_min
                x = (box[1] + 0.5) * self.box_size + self.lon_min
                circle = plt.Circle((x, y), self.radius1 * self.box_size, fill=False)
                gca.add_patch(circle)
    
    def draw_route(self, gca):
        gca.plot(self.lon, self.lat, 'ro-')

    def adjust_axis(self, gca):
        gca.axis((round(min(self.lon) - 4 * self.box_size, 2), 
                  round(max(self.lon) + 4 * self.box_size, 2), 
                  round(min(self.lat) - 4 * self.box_size, 2), 
                  round(max(self.lat) + 4 * self.box_size, 2)))
            

    


if __name__ == "__main__":
    
    box_size = 0.01
        
    with open("Pasadena2LAX.txt", 'r') as input_file:
        data_str = input_file.read()
        
    data = json.loads(data_str)
    routes = data['routes']
    route = routes[0]
    #         for key, val in route.items():
    #             print key, val
    #         points = route['overview_polyline']['points'] + '='
    # 
    points_raw = route['overview_polyline']['points']
    
    route = google_maps.points_decode(points_raw)
#     route = [(1, -0.5), (0, 0)]
#     route = [(1, -0.5), (0, 0), (0.8, 1), (1.1, 0.9), (1.4, 1.3), (1.1, 1.3)]
    
#     print route
# 
    boxes = route_boxes(route, box_size, 15)
    
    
    start = time.time()
#     d = boxes.query('restaurants, All')
    print time.time() - start
    
    print boxes.radius1
    print boxes.radius2
#     print len(d)
#     for key, val in d.items():
#         print key

#     plt.figure()
#     boxes.draw_boxes(plt.gca(), method=6)    
#     boxes.adjust_axis(plt.gca())  
#     
#     for x in boxes.col_merge_list:
#         print x
    
#     plt.figure()
#     boxes.draw_route(plt.gca())
#     boxes.adjust_axis(plt.gca())    
#     boxes.draw_boxes(plt.gca(), 0)
#     
#     plt.figure()    
#     boxes.draw_route(plt.gca())
#     boxes.adjust_axis(plt.gca())
#     boxes.draw_boxes(plt.gca(), 1)
#      
#     plt.figure()    
#     boxes.draw_route(plt.gca())
#     boxes.adjust_axis(plt.gca())
#     boxes.draw_boxes(plt.gca(), 1)
#     
#     plt.figure()    
#     boxes.draw_route(plt.gca())
#     boxes.adjust_axis(plt.gca())
#     boxes.draw_boxes(plt.gca(), 5)   
#      
#     plt.figure()    
#     boxes.draw_route(plt.gca())
#     boxes.adjust_axis(plt.gca())
#     boxes.draw_boxes(plt.gca(), 6)

#     plt.figure()    
#     boxes.draw_route(plt.gca())
#     boxes.adjust_axis(plt.gca())
#     boxes.draw_boxes(plt.gca(), 7)
        
#     print "col_merge:{}".format(len(boxes.col_merge_list))
#     print "row_merge:{}".format(len(boxes.row_merge_list))

#     plt.show()


    