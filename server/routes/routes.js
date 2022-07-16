const express = require('express');
const meetUpController = require('../controllers/meetupController')
const router = express.Router();


router.get('/getAll', meetUpController.allMeetups, (req, res) => {
    res.status(200).json(res.locals.data);
} )

router.get('/getAllWithMatch', meetUpController.meetupWithMatch, (req, res) => {
    res.status(200).json(res.locals.data);
} )

//post router goes here
router.post('/newEntry', meetUpController.newEntry, (req, res) => {
    res.status(200).json(res.locals.data);
} )

// edit router goes here

// delete router goes here

module.exports = router;