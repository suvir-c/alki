import csv

with open('./data/raw/LACollisions_2012through2016.csv', 'rt') as inp, open('./data/filtered/LACollisions_2012through2016.csv', 'w') as out:
	writer = csv.writer(out)
	count = 0
	for row in csv.reader(inp):
		if row[4] == "2016" and count > 0:
			writer.writerow( (row[0], row[1], row[4], row[7], row[8], row[18],
					row[26], row[40], row[41], row[42], row[43], 
					row[46], row[50], row[51], row[54], row[56], 
					row[64], row[78], row[79]) )
		count = count + 1
