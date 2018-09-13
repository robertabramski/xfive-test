# Pimp My Rect

## Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The API endpoints are served with [Express](https://expressjs.com). The persistence layer is [NeDB](https://github.com/louischatriot/nedb), a lightweight implementation of MongoDB.

A customized implementation of the [react-color](https://casesandberg.github.io/react-color) component was used for changing the colors of the rect. For size and border radius editing, [rc-slider](http://react-component.github.io/slider/) component was used for a range input.

For background color inversion, [invert-color](https://github.com/onury/invert-color) was used. Color inversion functionality did not make it to the `master` repo, but experiment branches exist that use present this feature.

## Development Workflow

To run the application in development, first install all dependencies with `npm run provision`. Next, run `npm start` from the root directory. This will start React in development mode and start the API server. React will open a browser window pointing to [http://localhost:3000](http://localhost:3000).

## Commands

Server commands are run from the root directory. Client commands are run from the `client` directory.

### Server Commands

`npm start` Starts the server and the client applications.

`npm test` Tests the application with all passed arguments and exits.

`npm run server` Starts only the server application.

`npm run client` Starts only the client application.

`npm run build` Builds and runs application for production, installing all dependencies.

`npm run provision` Installs all dependencies and exits.

### Client Commands

`npm start` Start the client application. This is the same as `npm run client` from Server Commands.

`npm run build` Builds the app for production to the `build` folder.

`npm test` Run all client tests in interactive mode.

## Production Build

To run the production build, clone the repository and from the root directory, run `npm run build`. After the script is completed, point the browser to [http://localhost:3001](http://localhost:3001). Express serves the static payload located in `client/build` as well as serving the API endpoints.

# Deployment

This application may be deployed on any server that supports persistent Node processes. This architecture follows best practices with [Passenger](https://www.phusionpassenger.com/).