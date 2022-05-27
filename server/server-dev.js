 'use strict';

 const express = require('express');
 const path = require('path');
 const app = express();
 
 //const BASE_URL = process.env.SERVICE_URL || 'https://pue-dev.app.corpintra.net';
 
 const PORT = process.env.PORT || 8080;
 //Static Content
 app.use(express.static(path.join(__dirname, '..', 'build/index.html')));
 
 app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, '..', 'build/index.html'));
 });
 
 app.listen(PORT, () => {
   console.log(`Listening on ${PORT}`);
 });