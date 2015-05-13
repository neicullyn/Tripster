import json
################ start yelp_query usage ###############
# from yelp_query import YelpQuery


# yelp = YelpQuery()
# response = yelp.query_by_bounds(37.9, -122.5, 37.78, -122.4)
# print response.get("businesses")
# # print response.get('businesses')
################### end yelp_query usage ###############




class CategoryNode:
	def __init__(self, title, alias):
		self.title = title
		self.alias = alias
		self.sub_categories = []

	def __str__(self):
		return self.title if self.title else "None"

	def __repr__(self):
		return self.title


def index_title_in_cat_nodes(title, cat_nodes):
	for i, cat_node in enumerate(cat_nodes):
		if title == cat_node.title:
			return i
	return -1


def dfs_print_nodes_as_indented_blocks(cat_nodes, indent):
	if not cat_nodes:
		return 
	for cat_node in cat_nodes:
		print("{}{}: {}".format(indent*" ", cat_node, cat_node.alias))
		dfs_print_nodes_as_indented_blocks(cat_node.sub_categories, indent+4)


def dfs_print_nodes_as_nested_lists(cat_nodes, indent):
	if not cat_nodes:
		return 

	indent_block = " " * indent
	print(indent_block + "<ul> \\")
	for cat_node in cat_nodes:
		print(indent_block + "  <li> \\")
		print(indent_block + "  {} \\".format(cat_node))
		dfs_print_nodes_as_nested_lists(cat_node.sub_categories, indent+4)
		print(indent_block + "  </li> \\")
	print(indent_block + "</ul> \\")


def remake_json_with_level(cat_nodes, indent):
	if not cat_nodes:
		return 

	indent_block = " " * indent
	print(indent_block + "<ul> \\")
	for cat_node in cat_nodes:
		print(indent_block + "  <li> \\")
		print(indent_block + "  {} \\".format(cat_node))
		dfs_print_nodes_as_nested_lists(cat_node.sub_categories, indent+4)
		print(indent_block + "  </li> \\")
	print(indent_block + "</ul> \\")

def printNodesAliases(nodes):
	for node in nodes:
		print(node.alias)




if __name__ == "__main__":
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



	category_levels = []
	root_node = CategoryNode(None, None)
	par_nodes = [root_node]
	while par_nodes:
		children_nodes = []
		for cat in data_categories:
			for cat_par in cat['parents']:
				index = index_title_in_cat_nodes(cat_par, par_nodes)
				if index != -1:
					new_node = CategoryNode(cat['title'], cat['alias'])
					children_nodes.append(new_node)
					par_nodes[index].sub_categories.append(new_node)
		par_nodes = children_nodes


	par_nodes = root_node.sub_categories
	# dfs_print_nodes_as_nested_lists(par_nodes, 0)
	dfs_print_nodes_as_indented_blocks(par_nodes, 0)



	# printNodesAliases(par_nodes)




