const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);

// muc tieu cach dung mudule de export sabg tap khac