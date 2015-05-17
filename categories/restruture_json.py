category_image_look_up = {
	"active": '<i class="fa fa-child"></i>',
	"arts": '<i class="fa fa-paint-brush"></i>',
	"hotelstravel": '<i class="fa fa-bed"></i>',
	"localflavor": '<i class="fa fa-map-marker"></i>',
	"localservices": '<i class="fa fa-map-marker"></i>',
	"nightlife": '<i class="fa fa-moon-o"></i>',
	"restaurants": '<i class="fa fa-cutlery"></i>',
	"shopping": '<i class="fa fa-shopping-cart"></i>'
}


class CatgoryNode:
	def __init__(self, title, alias):
		self.title = title
		self.alias = alias
		self.children = []

	def __str__(self):
		return self.title

	def __repr__(self):
		return self.title



def generate_dropdown_html():

	catgory_file_name = "test.txt"

	main_categories = []
	cur_main = None

	with open(catgory_file_name, "r") as fin:
		for line in fin:
			if line.startswith("    "):
				line = line[4:]
				(title, alias) = line.split(": ")
				title = title.strip().replace('&', '&amp;')
				alias = alias.strip()

				this_node = CatgoryNode(title, alias)
				cur_main.children.append(this_node)
			else:
				(title, alias) = line.split(": ")
				title = title.strip().replace('&', '&amp;')
				alias = alias.strip()
				this_node = CatgoryNode(title, alias)
				main_categories.append(this_node)
				cur_main = this_node


	for node in main_categories:
		'''
		<button type="button" id="btn-restaurants" class="btn btn-default" data-toggle="tooltip" title data-original-title="Food" data-placement="bottom" data-container="body">
			<i class="fa fa-cutlery"></i>
		</button>
		'''

		out_html = ''

		if node.children:
			out_html += '\n<div class="btn-group">\n'

		out_html += '<button type="button" id="btn-{}" class="btn btn-default" \
	data-toggle="tooltip" data-original-title="{}" data-placement="bottom" \
	data-container="body">\n'.format(node.alias, node.title)
		out_html += category_image_look_up[node.alias]
		out_html += '\n</button>'

		if node.children:
			out_html += '\n<ul class="dropdown-menu" role="menu" style="margin: 0; position: absolute; z-index: 100;">\n'
			for child in node.children:
				out_html += '<li><a href="#">{}</a></li>\n'.format(child.title)
			out_html += '</ul>\n'

			out_html += '\n</div>\n'
		
		print(out_html)








if __name__ == '__main__':
	generate_dropdown_html()















