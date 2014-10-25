var port = 8080;
var evh = require('express-vhost');
var express = require("express");
//var https = require('https');
var http = require('http');

//main webserver app
var main = express();
main.use(evh.vhost());

//load middlware apps
var site = require("/home/kolive/kyleolive.ca/index.js").app;
var staging = require("/home/kolive/staging.kyleolive.ca/index.js").app;

main.use('/', site);
evh.register('kyleolive.ca', site);
evh.register('staging.kyleolive.ca', staging);

http.createServer(main).listen(80);
//https.createServer(options, main).listen(443);

