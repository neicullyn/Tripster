#!/usr/bin/python
import cgi
import urllib
import sample
import sys
import StringIO
import subprocess

import google_maps
import route_boxes
import YelpQueryConcurrent
import json

import time

from google.appengine.api import users
from google.appengine.ext import ndb

import webapp2

MAIN_PAGE_FOOTER_TEMPLATE = """\
    <form action="/sign?%s" method="post">
      <div><textarea name="content" rows="3" cols="60"></textarea></div>
      <div><input type="submit" value="Sign Guestbook"></div>
    </form>
    <hr>
    <form>Guestbook name:
      <input value="%s" name="guestbook_name">
      <input type="submit" value="switch">
    </form>
    <a href="%s">%s</a>
  </body>
</html>
"""

DEFAULT_GUESTBOOK_NAME = 'default_guestbook'

# We set a parent key on the 'Greetings' to ensure that they are all
# in the same entity group. Queries across the single entity group
# will be consistent.  However, the write rate should be limited to
# ~1/second.

class Timer:
    def __init__(self):
        self.start = 0
    
    def tic(self):
        self.start = time.time()
    
    def toc(self):
        return time.time() - self.start

def guestbook_key(guestbook_name=DEFAULT_GUESTBOOK_NAME):
    """Constructs a Datastore key for a Guestbook entity.

    We use guestbook_name as the key.
    """
    return ndb.Key('Guestbook', guestbook_name)


class Author(ndb.Model):
    """Sub model for representing an author."""
    identity = ndb.StringProperty(indexed=False)
    email = ndb.StringProperty(indexed=False)


class Greeting(ndb.Model):
    """A main model for representing an individual Guestbook entry."""
    author = ndb.StructuredProperty(Author)
    content = ndb.StringProperty(indexed=False)
    date = ndb.DateTimeProperty(auto_now_add=True)


class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write('<html><body>')
        guestbook_name = self.request.get('guestbook_name',
                                          DEFAULT_GUESTBOOK_NAME)

        # Ancestor Queries, as shown here, are strongly consistent
        # with the High Replication Datastore. Queries that span
        # entity groups are eventually consistent. If we omitted the
        # ancestor from this query there would be a slight chance that
        # Greeting that had just been written would not show up in a
        # query.
        greetings_query = Greeting.query(
            ancestor=guestbook_key(guestbook_name)).order(-Greeting.date)
        greetings = greetings_query.fetch(10)

        user = users.get_current_user()
        for greeting in greetings:
            if greeting.author:
                author = greeting.author.email
                if user and user.user_id() == greeting.author.identity:
                    author += ' (You)'
                self.response.write('<b>%s</b> wrote:' % author)
            else:
                self.response.write('An anonymous person wrote:')
            self.response.write('<blockquote>%s</blockquote>' %
                                cgi.escape(greeting.content))

        if user:
            url = users.create_logout_url(self.request.uri)
            url_linktext = 'Logout'
        else:
            url = users.create_login_url(self.request.uri)
            url_linktext = 'Login'

        # Write the submission form and the footer of the page
        sign_query_params = urllib.urlencode({'guestbook_name':
                                              guestbook_name})
        self.response.write(MAIN_PAGE_FOOTER_TEMPLATE %
                            (sign_query_params, cgi.escape(guestbook_name),
                             url, url_linktext))

class Guestbook(webapp2.RequestHandler):
    def post(self):
        # We set the same parent key on the 'Greeting' to ensure each
        # Greeting is in the same entity group. Queries across the
        # single entity group will be consistent. However, the write
        # rate to a single entity group should be limited to
        # ~1/second.
        guestbook_name = self.request.get('guestbook_name',
                                          DEFAULT_GUESTBOOK_NAME)
        greeting = Greeting(parent=guestbook_key(guestbook_name))

        if users.get_current_user():
            greeting.author = Author(
                    identity=users.get_current_user().user_id(),
                    email=users.get_current_user().email())

        greeting.content = self.request.get('content')
        greeting.put()
        query_params = {'guestbook_name': guestbook_name}
        self.redirect('/?' + urllib.urlencode(query_params))
        
    
class GoogleMapsPage(webapp2.RedirectHandler):
    def get(self):
        timer = Timer()
        
        timer.tic()
        
        q = google_maps.GoogleQuery()
        
        routes = q.query('pasadena', 'lax')
        
        data_per_route = [{} for route in routes]        
        
        self.response.write('Runing\n')
        
        rtns = []
        for idx, route in enumerate(routes):
            self.response.write('Route {}\n'.format(idx))
            boxes = route_boxes.route_boxes(route, 0.01, 10)            
#             data_per_route[idx]['restaurants, All'] = boxes.query('restaurants, All')
            rtns.append(boxes.query('restaurants, All'))
            
        time = timer.toc()
        
        content = str(time)
        
#         content += json.dumps(data_per_route, sort_keys=True, indent=4)
        content += json.dumps(rtns, sort_keys=True, indent=4)
        self.response.write(str(content))
        
class YelpQueryConcurrentPage(webapp2.RedirectHandler):
    def get(self):
        q = YelpQueryConcurrent.YelpQueryConcurrent()

        query_list = []
        
        timer = Timer()
        
        timer.tic()
        
        
        for i in xrange(10):
            query_list.append(((34.1561, -118.1319), 4000, 0, "restaurants, All", 20))        
        
        response = q.query_by_ll(query_list)        
        
        
        time  = timer.toc()
        
        text = str(time) + '    '
        text += str(len(response))
        
#         content = json.dumps(response, sort_keys=True, indent=4)
        self.response.write(text)        

#         sys.stdout = gae_stdout
     

#         sys.stdout = gae_stdout
app = webapp2.WSGIApplication([
    ('/', YelpQueryConcurrentPage),
    ('/sign', Guestbook),
    ('/google_maps', GoogleMapsPage),
    ('/yelp', YelpQueryConcurrentPage)
], debug=True)