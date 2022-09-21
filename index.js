const express = require('express');
const app = express();
const Port = process.env.PORT || 5000;
const cors = require('cors');
const colors = require('colors');
require('dotenv').config();

// import route
const hellowRoute = require('./Route/v1/hellow.route');

// add meddileware
app.use(cors());
app.use(express.json());

// Hellow Route
app.use('/', hellowRoute);

app.listen(Port, () => {
	console.log(
		`Tour Management System server is running: ${Port}`.bgRed.white.bold
	);
});
