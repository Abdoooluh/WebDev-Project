require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const appointmentRoutes = require('./routes/appointments')
const doctorRoutes = require('./routes/doctor')

// express app
const app = express()
const mongoUrl = "mongodb+srv://ScoutMD:BongoDB@scoutmd.pyuwp1v.mongodb.net/?retryWrites=true&w=majority"
const port = 3000;
// middleware
app.use(express.json())

app.use(express.static('public'))
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/appointment', appointmentRoutes)
app.use('/api/doctor', doctorRoutes)

// connect to db
mongoose.connect((mongoUrl))
  .then(() => {
    console.log('connected to database');
    // listen to port
    app.listen(3000, () => {
      console.log('listening for requests on port', 3000);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the application on database connection error
  });
