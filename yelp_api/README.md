# YelpQuery

## Overview

Please refer to [Yelp API documentation](http://www.yelp.com/developers/documentation)
for more details.


## Steps to run

To install the dependencies, run:
`pip install -r requirements.txt`.

Run the code by specifying the optional arguments:

`python yelp_query.py --term bars -ll 34.1 -118.1`

Or run the code inside a program

~~~python
from yelp_query import YelpQuery
yelp = YelpQuery()

"""
query_api(self, ll,
          term = DEFAULT_TERM, location = DEFAULT_LOCATION,
          limit = DEFAULT_SEARCH_LIMIT, radius = DEFAULT_RADIUS)

An exception will raise if invalid search condition is entered
"""
# query by radius
try:
	businesses = yelp.query_api(ll=["34.1", "-118.1"], term="bar")
except:
	businesses = []

# query by bounds
try:
	businesses = yelp.query_by_bounds(37.9, -122.5, 37.78, -122.4, term='bar')
except:
	businesses = []



for business in businesses:
	print(business['id'])
~~~