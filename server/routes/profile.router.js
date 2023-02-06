const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware')

router.get("/", rejectUnauthenticated,(req,res) => {
    const profileData = req.profile
    console.log('req.user', profileData);

    const sqlQuery= `SELECT * FROM "profile"
        WHERE "user_id"=$1
        ORDER BY "id";`

    const sqlValues= [profileData];
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
        res.send(dbRes.rows)
    }).catch((dbErr) => {
        console.log('Get things failed:', dbErr);
        res.sendStatus(500)
    })
})



module.exports = router