const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware')

router.get("/", rejectUnauthenticated,(req,res) => {
    const profileData = req.profile
    console.log('req.user', profileData);

    const sqlQuery= `SELECT * FROM "profile"
        WHERE "user_id"=$1
        ORDER BY "user_id";`

    const sqlValues= [profileData];
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
        res.send(dbRes.rows)
    }).catch((dbErr) => {
        console.log('Get things failed:', dbErr);
        res.sendStatus(500)
    })
})

router.post('/', rejectUnauthenticated,(req,res) => {
    console.log(req.user);
    console.log('adding a new post to Posts', req.body);
    const brandName = req.body.brand_name
    const logo =req.body.logo_upload
    const vision= req.body.entity_vision
    const image= req.body.image_upload
    const user_id = req.user.id
    const sqlQuery = ` 
    INSERT INTO profile (brandName,logo_upload,entity_vision, image_upload, user_id)
    VALUES
    ($1, $2, $3,$4,$5);`;
    const sqlValues = [brandName,logo,vision,image, user_id]
    pool.query(sqlQuery, sqlValues)
    .then ((response) => {
        res.sendStatus(201)
    })
    .catch((error) => {
        console.log('error in /api/profile ',error);
        res.sendStatus(500);
    })
    })


module.exports = router