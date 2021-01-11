const express = require("express");
const bodyParser = require('body-parser');
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')


const mailRouter = require('./route.js')
require('colors')

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(morgan('dev'))


server.use('/v1', mailRouter);

module.exports = server
