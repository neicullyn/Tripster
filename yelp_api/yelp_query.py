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
import argparse
import json
import pprint
import sys
import urllib
import urllib2

import oauth2


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


class YelpQuery:
    def request(self, host, path, url_params=None):
        """Prepares OAuth authentication and sends the request to the API.

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
        
        # print u'Querying {0} ...'.format(url)

        conn = urllib2.urlopen(signed_url, None)
        try:
            response = json.loads(conn.read())
        finally:
            conn.close()

        return response

    def search(self, term, location, ll, limit, radius):
        """Query the Search API by a search term and location.

        Args:
            term (str): The search term passed to the API.
            location (str): The search location passed to the API.

        Returns:
            dict: The JSON response from the request.
        """
        
        if ll:
            url_params = {
                'term': term.replace(' ', '+'),
                'll': ','.join(ll),
                'limit': limit,
                'radius_filter': radius
            }
        else:
            url_params = {
                'term': term.replace(' ', '+'),
                'location': location.replace(' ', '+'),
                'limit': limit,
                'radius_filter': radius
            }
        return self.request(API_HOST, SEARCH_PATH, url_params=url_params)

    def get_business(self, business_id):
        """Query the Business API by a business ID.

        Args:
            business_id (str): The ID of the business to query.

        Returns:
            dict: The JSON response from the request.
        """
        business_path = BUSINESS_PATH + business_id

        return self.request(API_HOST, business_path)

    def query_api(self, 
                  ll,
                  term = DEFAULT_TERM, 
                  location = DEFAULT_LOCATION,
                  limit = DEFAULT_SEARCH_LIMIT, 
                  radius = DEFAULT_RADIUS):
        """Queries the API by the input values from the user.

        Args:
            term (str): The search term to query.
            location (str): The location of the business to query.
        """
        response = self.search(term, location, ll, limit, radius)
        businesses = response.get('businesses')
        return businesses

        # if not businesses:
        #     print u'No businesses for {0} in {1} found.'.format(term, location)
        #     return

        # business_id = businesses[0]['id']

        # print u'{0} businesses found, querying business info for the top result "{1}" ...'.format(
        #     len(businesses),
        #     business_id
        # )

        # response = get_business(business_id)

        # print u'Result for business "{0}" found:'.format(business_id)
        # pprint.pprint(response, indent=2)



def main():
    # python yelp_query.py --term="bars" -ll 34.1 -118.1
    parser = argparse.ArgumentParser()
    parser.add_argument('-q', '--term', dest='term', default=DEFAULT_TERM, type=str, help='Search term (default: %(default)s)')
    parser.add_argument('-l', '--location', dest='location', default=DEFAULT_LOCATION, type=str, help='Search location (default: %(default)s)')
    parser.add_argument('-ll', '--latlong', dest='ll', type=str, nargs=2, help='Search latitude and longtitude')
    parser.add_argument('-n', '--limit', dest='limit', default=DEFAULT_SEARCH_LIMIT, type=int, help='Limit on number of results')
    parser.add_argument('-r', '--radius', dest='radius_filter', default=DEFAULT_RADIUS, type=int, help='Search radius')

    input_values = parser.parse_args()

    try:
        businesses = YelpQuery().query_api(term=input_values.term, 
                  location=input_values.location, 
                  ll=input_values.ll,
                  limit=input_values.limit, 
                  radius=input_values.radius_filter)

        # for bus in businesses:
        #     print(bus['id'])
    except urllib2.HTTPError as error:
        sys.exit('Encountered HTTP error {0}. Abort program.'.format(error.code))


if __name__ == '__main__':
    main()
