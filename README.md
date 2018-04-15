Alki, BCG DV Hacks Mobility 2018
===

### Team Members:
Amulya Bhattarai, Suvir Copparam, Collin Tran

### Project Description:
Alki is an effort to rethink the pipeline for collecting, tracking, and using the huge amounts of transportation data generated everyday in urban metropolitan areas. After identifying various pain points in government data collection done daily by police officers in the Los Angeles area, we defined two aspects to our product to build and sell to municipal governments: collection and visualization.

Reviewing the current pipeline for how police officers report on the encounters they handle on a day-to-day basis in the LA area, we found that the current report mechanisms are quite primitive and lack simplicity. Even worse, once these officers take the time to submit information on each encounter they handle, whether its issuing a parking ticket, or reporting to the scene of a life-harming car accident, the data is ciloed into various corners of government services. The first part of our project aims to improve the data collection and entry experience for police officers and initialize an effort to improve infrastructure around these issues in the near future. A full breakdown can be found under the "Police Officer Data Input Form" section.

Furthermore, we found that current processes for identifying infrastructural and civil engineering problems in government are not as robust as they could be. A lot of this process is manual, and pushed forward by citizens and civil workers reporting on things like broken stoplights, potholes, and other transportation problems. Given the huge amount of data constantly being generated in local transportation, we sought to build a tool to empower local governments to make more informed, data-driven decisions on how they invest their budgets for these domains. By mapping various traffic incidents and events (tickets, collisions, etc.) to geographical locations, a government employee can better understand where infrastructural problems may lie in their city and even assess the severity of these problems, if, for example, 10 collisions occurred on the same street corner in the span of a month. These trends help identify areas for city planning improvement as urban areas continue growing in population and complexity. A full breakdown of our visualizer tool can be found under the "Traffic Data Geospatial Visualizer" section.

For our proof of concept, we employed a simple software architecture to continue building upon given more time. Over the course of the weekend we spent nearly as much defining and validating the problem through research online and in-person with various coaches as we did developing the product. We had a lot of fun, learned a lot about our problem space and launching new ventures - thanks for hosting us!

# Traffic Data Geospatial Visualizer

This react application utilizes existing collision and traffic infraction data, as well as any data gathered from the Alki police report web app, to better understand patterns and identify infrastructural problems in Los Angeles as they arise.

### File structure

The wrapper component we wrote to encapsulate the full application is in ['App.js'](https://github.com/suvir-c/alki/blob/master/map/dashboard/src/App.js), under which are various components for menus, a map view enabled through the Google Maps API, and markers for traffic events. The code for these components can be found in the ['/src'] directory (https://github.com/suvir-c/alki/tree/master/map/dashboard/src).
The data for the visualizations is fetched from JSON files that have been stored locally for the purpose of our demo. The application also fetches data stored from the police data entry application.

### Setup & Local Development

```bash
git clone https://github.com/suvir-c/alki.git
cd map/dashboard
npm install
npm run start
```

The application can then be accessed at http://localhost:3000

# Police Officer Data Input Form 

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
