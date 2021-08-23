// server/index.js

const path = require('path');

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// dynamically serve based on current location
app.use(express.static(path.resolve(__dirname, '../client/build')));

// handle the GET requests to /api route
app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

// all other GET requests
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname), '../client/build','index.html')
});

app.listen(PORT, ()=>{
	console.log(`Server listening on ${PORT}`);
});