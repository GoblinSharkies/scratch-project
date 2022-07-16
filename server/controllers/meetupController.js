const db  = require('../models/meetupModel');

const meetUpController ={};

meetUpController.allMeetups = (req, res, next) => {
    const sqlQuerie = 'SELECT * FROM meetups';
    db.query(sqlQuerie)
    .then(data => {
        console.log('data: ', data);
        res.locals.data = data.rows;
        return next();
    })
    .catch(err=>({error: err}))
}


module.exports = meetUpController;

