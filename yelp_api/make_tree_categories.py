import json
################ start yelp_query usage ###############
# from yelp_query import YelpQuery


# yelp = YelpQuery()
# response = yelp.query_by_bounds(37.9, -122.5, 37.78, -122.4)
# print response.get("businesses")
# # print response.get('businesses')
################### end yelp_query usage ###############




class CategoryNode:
	def __init__(self, title):
		self.title = title
		self.sub_categories = []

	def __str__(self):
		return self.title if self.title else "None"

	def __repr__(self):
		return self.title



'''
preprocess json file
make all letters to lower case
'''
with open('categories.json', 'r') as fin:
	s = fin.read().lower()

with open('categories.json', 'w') as fout:
	fout.write(s)




with open("categories.json", 'r') as fin:
	data_categories = json.load(fin)


all_keys = set()

roots = set()

for i, d in enumerate(data_categories):
	if not d['parents'][0]:
		roots.add(d['title'].lower())



def index_title_in_cat_nodes(title, cat_nodes):
	for i, cat_node in enumerate(cat_nodes):
		if title == cat_node.title:
			return i
	return -1


category_levels = []
root_node = CategoryNode(None)
par_nodes = [root_node]
while par_nodes:
	children_nodes = []
	for cat in data_categories:
		for cat_par in cat['parents']:
			index = index_title_in_cat_nodes(cat_par, par_nodes)
			if index != -1:
				new_node = CategoryNode(cat['title'])
				children_nodes.append(new_node)
				par_nodes[index].sub_categories.append(new_node)
	par_nodes = children_nodes




def dfs_print_nodes(cat_nodes, indent):
	if not cat_nodes:
		return 
	for cat_node in cat_nodes:
		print("{}{}".format(indent*" ", cat_node))
		dfs_print_nodes(cat_node.sub_categories, indent+4)

par_nodes = root_node.sub_categories
dfs_print_nodes(par_nodes, 0)