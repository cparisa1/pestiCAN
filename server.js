/* //Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); */


const express = require('express');
const http = require('http');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

const server = http.createServer(app);

server.listen(port, ()=> console.log("Running..."));