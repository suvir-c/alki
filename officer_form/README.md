Police Officer Data Input Form - Alki, BCG DV Hacks Mobility 2018
===

This node application enables police officers to better catalog data from their daily work, logging information on general infractions they register and any calls they answer.

### File structure

There are two main things of concern: the node server and the client side code.

The server side code is contained in ['index.js'](https://github.com/suvir-c/alki/blob/master/officer_form/index.js) and it simply serves webpages, assets, and a csv file which we used as our temporary data store for our v0 of the application. It also handles a simple `POST` endpoint to record successful entry by a police officer of an event.

### Setup & Local Development

```bash
git clone https://github.com/suvir-c/alki.git
cd officer_form
npm install
npm run start
```

The application can then be accessed at http://localhost:3000
