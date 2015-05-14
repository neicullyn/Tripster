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
        
        self.categories = get(business_d, 'catagories')
        
        self.snippet_text = get(business_d, 'snippet_text')
        
        location = get(business_d, 'location')
        
        self.address = get(location, 'address')
        self.postal_code = get(location, 'postal_code')
        self.state_code = get(location, 'state_code')
        
        self.latitude = lat
        self.longitude = lng