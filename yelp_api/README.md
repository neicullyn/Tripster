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

```
yelp = YelpQuery()

"""
query_api(self, ll,
          term = DEFAULT_TERM, location = DEFAULT_LOCATION,
          limit = DEFAULT_SEARCH_LIMIT, radius = DEFAULT_RADIUS)

An exception will raise if invalid search condition is entered
"""
try:
	businesses = yelp.query_api(ll=["34.1", "-118.1"], term="bar")
except:
	businesses = []
```