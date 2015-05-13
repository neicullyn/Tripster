import json

json_file = "categories.json"

with open(json_file, 'r') as fin:
	data = json.load(fin)

print(data[0])