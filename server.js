require('dotenv').config()
require('./config/database')
const express = require('express');
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const app = express();
// development port: 3001
const PORT = process.env.PORT || 3001
// in production we'll set a PORT number set in the environment variables

// Config
// Logger middleware
app.use(logger('dev'))
// JSON payload middleware (for data coming from frontend functions)
app.use(express.json())

// tells what to search for : Since we asked for dirname and not file name we write the build we want searched: The file within the directory
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
// * All other routes




// Put API routes here, before the "catch all" route
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})



app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})