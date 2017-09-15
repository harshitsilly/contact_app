var express = require('express');
var http = require('http');
var path = require('path');

//const api = require('./server/routes/api');
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000 ;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
