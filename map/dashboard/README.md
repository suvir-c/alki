Traffic Data Geospatial Visualizer - Alki, BCG DV Hacks Mobility 2018
===

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
