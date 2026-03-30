// TODO 1: Import Express
import express from 'express';


// TODO 2: Create the Express app and store it in a variable named app
const app = express();

app.use(cors());


// TODO 3: Allow React to access the server
import cors from 'cors';

// TODO 5: Create the home route "/"
app.get('/', (req, res) => {
    res.send('Hello from the back-end server');
  });
