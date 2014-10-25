var port = 8080;
var express = require("express");
var https = require('https');
var http = require('http');

//main webserver app
var main = express();

//load middlware apps
var site = require("/home/kolive/kyleolive.ca/website.js").app;
var staging = require("/home/kolive/staging.kyleolive.ca/website.js").app;

main.use(site);
main.use(express.vhost("staging.kyleolive.ca", staging));

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

