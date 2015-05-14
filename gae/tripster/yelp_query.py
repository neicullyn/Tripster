# -*- coding: utf-8 -*-


"""


Reference:
Yelp API v2.0 code sample.

This program demonstrates the capability of the Yelp API version 2.0
by using the Search API to query for businesses by a search term and location,
and the Business API to query additional information about the top result
from the search query.

Please refer to http://www.yelp.com/developers/documentation for the API documentation.

This program requires the Python oauth2 library, which you can install via:
`pip install -r requirements.txt`.

"""
import json
import urllib
import business_entry

import oauth2
from google.appengine.api import urlfetch

API_HOST = 'api.yelp.com'
DEFAULT_TERM = 'dinner'
DEFAULT_LOCATION = 'San Francisco, CA'
DEFAULT_SEARCH_LIMIT = 3
DEFAULT_RADIUS = 3200 # unit is in meters (1600 meters = 1 mile)
SEARCH_PATH = '/v2/search/'
BUSINESS_PATH = '/v2/business/'


# OAuth credential placeholders that must be filled in by users.
CONSUMER_KEY = 'iC0cdMCqvnYbqxNaxzIEZQ'
CONSUMER_SECRET = '7X3bqAFPs1hvFO9PkxsZ1CxCOz0'
TOKEN = 'L9ZArB2hH2aJI9tjN-uJSZWOK7qjjreB'
TOKEN_SECRET = '06ELQLKHZ9LGkHO3cGR_3Y4C0rE'


class YelpQueryConcurrent:
    def sign_url(self, host, path, url_params=None):
        """Prepares OAuth authentication and return the signed url.

        Args:
            host (str): The domain host of the API.
            path (str): The path of the API after the domain.
            url_params (dict): An optional set of query parameters in the request.

        Returns:
            dict: The JSON response from the request.

        Raises:
            urllib2.HTTPError: An error occurs from the HTTP request.
        """
        url_params = url_params or {}
        url = 'http://{0}{1}?'.format(host, urllib.quote(path.encode('utf8')))

        consumer = oauth2.Consumer(CONSUMER_KEY, CONSUMER_SECRET)
        oauth_request = oauth2.Request(method="GET", url=url, parameters=url_params)

        oauth_request.update(
            {
                'oauth_nonce': oauth2.generate_nonce(),
                'oauth_timestamp': oauth2.generate_timestamp(),
                'oauth_token': TOKEN,
                'oauth_consumer_key': CONSUMER_KEY
            }
        )
        token = oauth2.Token(TOKEN, TOKEN_SECRET)
        oauth_request.sign_request(oauth2.SignatureMethod_HMAC_SHA1(), consumer, token)
        signed_url = oauth_request.to_url()

        return signed_url

    def query_by_bounds(self, query_list):
        # http://api.yelp.com/v2/search?term=food&bounds=37.900000,-122.500000|37.788022,-122.399797&limit=3
        # sw_lat, sw_lon, ne_lat, ne_lon, offset, term, limit        
        url_list = []
        
        for para in query_list:
            sw_lat, sw_lon, ne_lat, ne_lon, offset, term, limit = para
            url_params = {
                'sort': 2,
                'term': term.replace(' ', '+'),
                'bounds': "{},{}|{},{}".format(sw_lat, sw_lon, ne_lat, ne_lon),
                'limit': limit,
                'offset': offset,            
            }
            url_list.append(self.sign_url(API_HOST, SEARCH_PATH, url_params))
        
        rpc_list = []
        
        for url in url_list:
            rpc = urlfetch.create_rpc(deadline=10)
            urlfetch.make_fetch_call(rpc, url)
            rpc_list.append(rpc)
            
        for rpc in rpc_list:
            rpc.wait()
        
        response = []
        
        for rpc in rpc_list:
            result = rpc.get_result()
            if result.status_code == 200:
                response.append(result.content)
                            
        return response
    
    def query_by_ll(self, query_list):
        # ll, radius, offset, term, limit        
        url_list = []
        
        for para in query_list:
            ll, radius, offset, term, limit = para
            url_params = {
                'sort': 2,
                'term': term.replace(' ', '+'),
                'll': '{},{}'.format(*ll),
                'limit': limit,
                'radius_filter': radius,
                'offset': offset,            
            }
            url_list.append(self.sign_url(API_HOST, SEARCH_PATH, url_params))
        
        rpc_list = []
        
        for url in url_list:
            rpc = urlfetch.create_rpc(deadline=10)
            urlfetch.make_fetch_call(rpc, url)
            rpc_list.append(rpc)
            
        for rpc in rpc_list:
            rpc.wait()
        
        response = []
        
        for rpc in rpc_list:
            result = rpc.get_result()
            if result.status_code == 200:
                response.append(json.loads(result.content))
                            
        return response     
