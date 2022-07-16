const db  = require('../models/meetupModel');

const meetUpController ={};

meetUpController.allMeetups = (req, res, next) => {


    const sqlQuerie = 'SELECT * FROM meetups ';
    db.query(sqlQuerie)
    .then(data => {
        console.log('data: ', data);
        res.locals.data = data.rows;
        return next();
    })
    .catch(err=>({error: err}))
}


//create get request for matches
meetUpController.meetupWithMatch = (req, res, next) => {

  const {activity, day} = req.query;
  let queryParams;
  let query;

  // i want coffee on saturday (specific)
  if (day && activity ) {
    console.log('picked both')
    query = `SELECT * FROM meetups WHERE meetups.activity = $1 AND meetups.day = $2`;
    queryParams = [activity, day];
  }
  
  // i want just saturday
  if (day && !activity) {
    console.log('picked day only')
    query = `SELECT * FROM meetups WHERE meetups.day = $1`;
    queryParams = [day];
  }
  // i want just coffee
  if (!day && activity) {
    console.log('picked activity only')
    query = `SELECT * FROM meetups WHERE meetups.activity = $1`;
    queryParams = [activity];
  }
  
  // run db search 
  db.query(query, queryParams)
  .then(data => {
      console.log('data.rows: ', data.rows);
      res.locals.data = data.rows;
      return next();
  })
  .catch(err=>(next({error: err})))
}


meetUpController.newEntry = (req, res, next) => {
    console.log("req.body:", req.body)
    const {username, first_name, last_name, activity, day, created_at} = req.body;
    const query = 'INSERT INTO meetups (username, first_name, last_name, activity, day, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;'
    const queryParams = [username, first_name, last_name, activity, day, created_at];

    db.query(query, queryParams)
    .then(data => {
      console.log('data.rows: ', data.rows);
      // res.locals.data = data.rows;
      return next();
    })
    .catch(err => (next(err)))
    // return next();
}

module.exports = meetUpController;
