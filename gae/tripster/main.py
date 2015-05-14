#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import math
import json
import webapp2
import time

import google_maps
import route_boxes
import business_entry

class Timer:
    def __init__(self):
        self.start = 0
    
    def tic(self):
        self.start = time.time()
    
    def toc(self):
        return time.time() - self.start

class MainHandler(webapp2.RequestHandler):
    def get(self):
        
        origin = self.request.get('origin')
        dest = self.request.get('dest')
        catagories = self.request.get('categories').split(',')
        
        google_map_query = google_maps.GoogleQuery()
        routes = google_map_query.query(origin, dest)       
        
#         self.response.write('number of routes:' + str(len(routes)))
#         self.response.write('<br/>')
        
        for route in routes:
                    
            tmr = Timer()
            tmr.tic()            
            
#             self.response.write('-------------------------<br/>')
            
            sw, ne = route['bounds']
            distance = route['distance']
            points = route['points']
            
            box_size = max(abs(sw[0] - ne[0]), abs(sw[1] - ne[1])) / 250
            
            # the maximum radius of yelp api is 40000m
            # use 30000 here since the method is not that stable
            radius_expect = min(distance / 50, 30000) / 1.25 
            
            # our actual radius is 0.8 * l where l is the maximum distance
            # between two center
            l = radius_expect * 1.25
            
            # number of centers
            k = int(math.ceil(distance / l))
            
#             self.response.write('box_size: ' + str(box_size) + '<br/>')
#             self.response.write('l: ' + str(l) + '<br/>')
#             self.response.write('k: ' + str(k) + '<br/>')  
            
            boxes = route_boxes.route_boxes(points, box_size, k)
            
#             self.response.write('r: ' + str(boxes.radius2) + '<br/>')  
             
            businesses = {}
            
#             self.response.write('--' + str(tmr.toc()) + '--<br/>')
             
            for cat in catagories:
                rtn = boxes.query(cat)
                businesses.update(rtn)
            
            clusters = business_entry.business_cluster(businesses, 10)
#             self.response.write('--' + str(tmr.toc()) + '--<br/>')
#             
            self.response.write(json.dumps(clusters))
#              
#             for key in businesses:
#                 self.response.write(key)
#                 self.response.write(json.dumps(businesses[key].__dict__).replace('\n', '<br/>'))
#                 self.response.write('<br/')
#                 self.response.write('<br/>')
#                 
#             self.response.write('--' + str(tmr.toc()) + '--<br/>')
#                  
        
app = webapp2.WSGIApplication([
    (r'/main.*', MainHandler)
], debug=True)
