import csv

with open('./data/raw/Parking_Citations.csv', 'rt') as inp, open('./data/filtered/Parking_Citations.csv', 'w') as out:
	writer = csv.writer(out)
	count = 0
	for row in csv.reader(inp):
		date = row[1]
		date = date[-2:]
		if date == "16" and count > 0:
			writer.writerow( (row[1], row[15], row[16], row[17], row[18]) )
		count = count + 1
