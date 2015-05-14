from google.appengine.api import urlfetch
import json

class GoogleQuery:
    
    def __init__(self):
        pass
    
    def query(self, origin, dest):
#         api_key = 'AIzaSyA_184La6d9B8IR4STZljUmYqcci6RLt50'
        api_key = 'AIzaSyCTRofF3hWYbBB-ubiS0yvvh_EXeKbNduY'
        base_url = 'https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={dest}&key={key}&alternatives=true'
        url = base_url.format(origin=origin, dest=dest, key=api_key)
        url = url.replace(' ', '+')
        
        return_list = []
        
        result = urlfetch.fetch(url)
        if result.status_code == 200:
            data_str = result.content
            data = json.loads(data_str)
            routes = data['routes']
            for route in routes:
                points_raw = route['overview_polyline']['points']
                points = points_decode(points_raw)
                
                rtn = {}
                
                bounds_ne = route['bounds']['northeast']['lat'], route['bounds']['northeast']['lng']
                bounds_sw = route['bounds']['southwest']['lat'], route['bounds']['southwest']['lng']
                rtn['bounds'] = bounds_sw, bounds_ne
                
                rtn['distance'] = sum([float(leg['distance']['value']) for leg in route['legs']])
                 
                rtn['points'] = points
#                 
                return_list.append(rtn)        
        return return_list
   
def points_decode(points_str):
    coord_chunks = []
    num_chunk = []
    for c in points_str:        
        
        # convert the character to binary number
        val = ord(c) - 63
        
        # value with more chunks following will have 0x20
        more_chunks = val & 0x20        
        val &= 0x1F
        
        # append the current value to the num_chunk
        num_chunk.append(val)
        
        # if no more chunk follows, add the num_chunk to the list
        if not more_chunks:
            coord_chunks.append(num_chunk)
            num_chunk = []
            
    num_list = []
    
    for num_chunk in coord_chunks:
        val = 0
        
        # regenerate the value
        for x in reversed(num_chunk):
            val = (val << 5) | x
              
        # the sign bit is the first bit now
        if(val & 0x01):
            val = ~val
            
        # regenerate the original value
        val = val >> 1
        
        val /= 1.0e5
        num_list.append(val)
    
    points_list = []
    
    cur_x = 0
    cur_y = 0
    
    for i in xrange(0, len(num_list), 2):
        offset_x = num_list[i]
        offset_y = num_list[i+1]
        
        # if nothing changes, continue
        if offset_x == offset_y:
            continue
        
        cur_x += offset_x
        cur_y += offset_y
        
        # round to 6 digits, to be the same as what they are before encoded
        points_list.append((round(cur_x, 6), round(cur_y, 6)))
    
    return points_list

