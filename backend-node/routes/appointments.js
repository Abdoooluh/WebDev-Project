const express = require('express')

const router = express.Router()

// GET all appointments
router.get('/', (req, res) => {
  res.json({mssg: 'GET all appointments'})
})

// GET a single appointment
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single appointment'})
})

// POST a new appointment
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new appointment'})
})

// DELETE a appointment
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a appoitnment'})
})

// UPDATE a appointment
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a appointment'})
})

module.exports = router