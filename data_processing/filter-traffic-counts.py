import csv

with open('./data/raw/LADOT_Traffic_Counts_Summary.csv', 'rt') as inp, open('./data/filtered/LADOT_Traffic_Counts_Summary.csv', 'w') as out:
	writer = csv.writer(out)
	count = 0
	for row in csv.reader(inp):
		date = row[5]
		date = date[-4:]
		if date == "2016" and count > 0:
			writer.writerow(row)
		count = count + 1
