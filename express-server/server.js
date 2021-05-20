import express, { json } from 'express';
import recipiesRouter from './routes/recipies';

// Loads env variables
require('dotenv').config()

// Initalizes express server
const app = express();


// specifies what port to run the server on
const PORT = process.env.PORT || 3001;

// Adds json parsing middleware to incoming requests
app.use(json());

// makes the app aware of routes in another folder
app.use('/recipies', recipiesRouter)

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//npm module.exports = app;