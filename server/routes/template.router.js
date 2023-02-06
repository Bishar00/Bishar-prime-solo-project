const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// /**
//GET route template
// router.get('/', rejectUnautheticated, (req,res) => {
//   const currentUserID =req.user.id;
//   const sqlQuery = `
//   `

//   const sqlValues= [currentUserID]
//   pool.query(sqlQuery,sqlValues)
//   .then((dbRes) => {
//   res.send(dbRes.rows)
//   })
//   .catch((dbErr) => {
//     console.log('Get things failed',dbErr);
//   })
// });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  
});

module.exports = router;
