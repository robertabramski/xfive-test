# Pimp My Rect

## Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The API endpoints are served with [Express](https://expressjs.com). The persistence layer is [NeDB](https://github.com/louischatriot/nedb), a lightweight implementation of MongoDB. More to come as the stack develops.

## Development Workflow

To run the application in development, first install all dependencies with `npm run provision`. Next, run `npm start` from the root directory. This will start React in development mode and start the API server. React will open a browser window pointing to [http://localhost:3000](http://localhost:3000).

## Commands

Server commands are run from the root directory. Client commands are run from the `client` directory.

### Server Commands

`npm start` Starts the server and the client applications.

`npm run server` Starts only the server application.

`npm run client` Starts only the client application.

### Client Commands

`npm start` Start the client application. This is the same as `npm run client` from Server Commands.

`npm run build` Builds the app for production to the `build` folder.

## Production Build

To run the production build, clone the repository and from the root directory, run `npm run build`. After the script is completed, point the browser to [http://localhost:3001](http://localhost:3001). Express serves the static payload located in `client/build` as well as serving the API endpoints.

# Deployment

This application may be deployed on any server that supports persistent Node processes. This architecture follows best practices with [Passenger](https://www.phusionpassenger.com/).