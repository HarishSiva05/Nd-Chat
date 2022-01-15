//const cookieParser = require('cookie-parser');
const { Session } = require('inspector');

var express = require('express'),
    app= express(),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    session = require('express-session')

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'))
app.set('view engine','html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({secret:'Avengers'}));
require('./routes/routes.js')(express, app);

app.listen(3000,function(){
    console.log("Chat Working on port 3000");
})