const express = require('express')
const Data = require('../data.js')
const router = new express.Router()

// EndPoint1: Return Absent days as per screen 1
router.get('/absentDays/', async (req, res) => {
    try {
        res.send('Absent Days : ' + Data.absent_count)
    } catch(e) {
        res.status(500).send()
    }
})

// EndPoint2: Return Absent days details as per screen 2.
router.get('/absentDetails/', async (req, res) => {
    try {
        res.send(Data.absents_details)
    } catch(e) {
        res.status(500).send()
    }
})

// EndPoint3: Return Available Leaves as per screen 3
router.get('/leaveBalance/', async (req, res) => {
    try {
        res.send(Data.leaveBalance)
    } catch(e) {
        res.status(500).send()
    }
})

// EndPoint4: Return Holiday Calendar as per screen 4
router.get('/holidayCalender/', async (req, res) => {
    try {
        res.send(Data.holidays)
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router