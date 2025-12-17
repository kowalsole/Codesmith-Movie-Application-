//Rene's Node.js rotating file stream logging setup
const express = require ('express'); // Import express
const morgan = require ('morgan'); // Import morgan for logging
const fs = require('fs'); // Import the file system tool
const rfs = require ('rotating-file-stream'); // Import rotating file stream
const path = require ('path'); // Import path module

const logDirectory = path.join(__dirname, 'logs'); // define log directory

//ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const app = express(); 

//setting up the file stream
const errorLogStream = rfs.createStream('error.log' , {
    interval: '1d', // rotate daily 
    path: path.join(__dirname, 'logs'), // directory to save log files
    maxFiles: 30, //keep logs for 30 days max 
    size: '25M', // 25 Megabytes
});

app.use (morgan('dev'));

app.use(morgan('combined', {
    stream: errorLogStream, 
    skip: (req, res) => res.statusCode < 400 //log only errors (status code 400 and above, preventing the hard drive from filling up with normal useless logs. 
}));

//1st possible route request (200)
app.get ('/',(req, res) => {
    res.send ( 'SMASHING SUCCESS! This appears in the console, but not in the file.');
});

//2nd possible route missing page (404)
app.get ('/broken', (req, res) => {
    res.status(404).send('Not found');
});

//3rd possible route crashed Server (500) 
app.get('/crash',  (req, res) => {
    res.status(500).send('Server Error');
});

app.listen (3000, () => {
    console.log('Server started on port 3000'); 
}); 