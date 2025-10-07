const express = require('express')
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js')
const { readDirSync } = require('fs');

const app = express()
const PORT = 3000

app.use(express.json())

const DB_URL = process.env.DB_URL;
const SERVICE_KEY = process.env.SERVICE_KEY;
const supabase = createClient(DB_URL, SERVICE_KEY);

export default supabase;

app.get('/ping', (req, res) => {
	res.send("pong");
})

app.get('/', (req, res) => {
	res.send("Hello World");
})

readDirSync('./Routes').map((r) => {
	app.use('/', require('./Routes/', r));
})

app.listen(PORT, () => {
	console.log(`App is running in port: ${PORT}`)
})
