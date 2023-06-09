const session = require('express-session')
var express = require('express');
var app = express();
var memoryStore = new session.MemoryStore(); 
app.use(session({ secret: 'nY4MjpLFxUMyBXoVWWddwWXJlCSQ8SMM', resave: false, saveUninitialized: true, store: memoryStore })); 
const keycloak = require('./config/keycloak-config.js').initKeycloak(memoryStore);

app.use(keycloak.middleware());
app.get('/', function(req, res){
   res.send("Server is up!");
});

app.listen(3000);

var testController = require('./controller/test-controller.js');
app.use('/test', testController);