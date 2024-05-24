# Brighton Tech Challenge

`app.js` is the main file of the application. 

## Data Structure File

Normalized Data Structure can be found in the `store_data_structure.txt` file. 

## Helper Functions

The `helper.js` file contains the following functions:

`getStoreData()`: Asynchronously fetches store data.

`generateHTML(data)`: Generates an HTML string from the provided store data.

`getStoreCountByState(data)`: Processes store data to count the number of stores per state.

## Running the Application

### Requirements

- Docker Desktop Installed
- Node 18+

### Starting the App

1.) `git clone git@github.com:thearmandov/brighton-challenge.git`

2.) `cd brighton-challenge` 

3.) `docker-compose up -d --build`

4.) Access via `localhost:3000`