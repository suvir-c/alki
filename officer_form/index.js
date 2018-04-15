const express = require('express')
	, bodyParser = require('body-parser')
	, csvWriter = require('csv-write-stream')
	, path = require('path')
	, fs = require('fs');

let app = express()

app.use(express.static('public'))

app.use(bodyParser.json())

app.post('/infractions', (req, res) => {
	var writer = csvWriter({sendHeaders: false});
	writer.pipe(fs.createWriteStream(path.join(__dirname, '.data', 'infractions.csv'), {flags: 'a'}));
	writer.write({	latitude: req.body.latitude, 
			longitude: req.body.longitude, 
			weather: req.body.weather,
			timeOfDay: req.body.time,
			roadConditions: req.body.roadConditions,
			speeding: req.body.speeding,
			speedLimit: req.body.speedLimit,
			dui: req.body.dui,
			bac: req.body.bac,
			driverReason: req.body.driverReason
		     });
	writer.end();
	console.log(req.body);
	//res.sendStatus(200);
	res.sendFile(path.join(__dirname + '/webpages/driverEntry.html'));
});

app.get('/download/:secret', (req, res) => {
	if(req.params.secret === process.env.SECRET) {
		res.sendFile(path.join(__dirname, '.data', 'infractions.csv'));
	}
	else {
		res.sendStatus(401);
	}
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/webpages/main.html'));
});

app.get('/form', (req, res) => {
	res.sendFile(path.join(__dirname + '/webpages/initialForm.html'));
});

app.get('/furtherDetails', (req, res) => {
	res.sendFile(path.join(__dirname + '/webpages/furtherDetails.html'));
});

app.get('/driverEntry', (req, res) => {
	res.sendFile(path.join(__dirname + '/webpages/driverEntry.html'));
});

app.get('/analytics', (req, res) => {
	res.sendFile(path.join(__dirname + '/webpages/analytics.html'));
});

app.get('/submitted', (req, res) => {
	res.sendFile(path.join(__dirname + '/webpages/submitted.html'));
});

console.log('Visit ' + (process.env.PROJECT_DOMAIN || 'http://localhost:3000'))
app.listen(process.env.PORT || 3000);
