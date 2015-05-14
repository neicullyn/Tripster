import math

def get(d, key):
    if d is not None and d.has_key(key):
        return d[key]
    else:
        return ''
    
class business_entry(object):
    def __init__(self, business_d, lat, lng):
        self.id = business_d['id']
        
        self.name = get(business_d, 'name')
        
        self.rating = get(business_d, 'rating')
        
        self.rating_img_url = get(business_d, 'rating_img_url')
        
        self.image_url = get(business_d, 'img_url')
        
        self.categories = get(business_d, 'categories')        
        
        self.snippet_text = get(business_d, 'snippet_text')
        
        location = get(business_d, 'location')
        
        self.address = get(location, 'address')
        self.postal_code = get(location, 'postal_code')
        self.state_code = get(location, 'state_code')
        
#         self.latitude = lat
#         self.longitude = lng

        if(location.has_key('coordinate')):
            self.latitude = float(location['coordinate']['latitude'])
            self.longitude = float(location['coordinate']['longitude'])
        else:
            self.latitude = 0
            self.longitude = 0
        
        self.all = business_d
        
def distance_center_business(center, b):
        R = 6371000
        ph0 = center[0] / 180 * math.pi
        ph1 = b.latitude / 180 * math.pi
        lam = (center[1] - b.longitude) / 180 * math.pi
        a = math.sin((ph0 - ph1) / 2)  ** 2 + math.cos(ph0) * math.cos(ph1) * (math.sin(lam / 2) ** 2)
        c = 2 * math.atan2(math.sqrt(a), math.  sqrt(1-a))
        d = R * c
        return d
    
def distance_center_business2(center, b):
        R = 6371000
        ph0 = center[0] / 180 * math.pi
        ph1 = b['latitude'] / 180 * math.pi
        lam = (center[1] - b['longitude']) / 180 * math.pi
        a = math.sin((ph0 - ph1) / 2)  ** 2 + math.cos(ph0) * math.cos(ph1) * (math.sin(lam / 2) ** 2)
        c = 2 * math.atan2(math.sqrt(a), math.  sqrt(1-a))
        d = R * c
        return d
        
def business_cluster(businesses, K):
    businesses_list = []
    
    for val in businesses.values():
        businesses_list.append(val)
    
    flag_list = [-1 for v in xrange(len(businesses_list))]
    
    centers = [(businesses_list[i].latitude, businesses_list[i].longitude) for i in xrange(K)]; 
    flag = True
    i_iter = 0
    
    try:
        while flag == True:
            i_iter += 1
            flag = False
            for i, b in enumerate(businesses_list):
                dist_centers = [distance_center_business(cen, b) for cen in centers]
                new_center = min([(dist, j) for j, dist in enumerate(dist_centers)])[1]
                if flag_list[i] != new_center:
                    flag = True
                flag_list[i] = new_center
        
        for i in xrange(len(centers)):
            index = [j for j in xrange(len(businesses_list)) if flag_list[j] == i]
            x = 1.0 * sum([businesses_list[j].latitude for j in index]) / len(index)
            y = 1.0 * sum([businesses_list[j].longitude for j in index]) / len(index)
            centers[i] = x,y
    except ZeroDivisionError:
        print "The number of centers is too large. K-means fails."
    
    clusters = []
    for i in xrange(len(centers)):
        d = {}
        d['center'] = centers[i]
        index = [j for j in xrange(len(businesses_list)) if flag_list[j] == i]
        d['businesses'] = [businesses_list[j].__dict__ for j in index]
        clusters.append(d)       
        
            
    for clst in clusters:
        cen = clst['center']
        dist = [distance_center_business2(cen, b) for b in clst['businesses']]
        clst['radius'] = max(dist)
        
    return clusters
                