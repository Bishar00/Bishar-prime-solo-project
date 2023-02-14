const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware')

router.get("/", rejectUnauthenticated,(req,res) => {
    const postsDataID = req.user.id;
    console.log('req.user', postsDataID);
    console.log('this is the res',res);

    const sqlQuery= `SELECT * FROM "posts"
        WHERE "user_id"=$1
        ORDER BY "id";`

    const sqlValues= [postsDataID];
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
const newTitle = req.body.title
const newDescription =req.body.description
const user_id = req.user.id
const sqlQuery = ` 
INSERT INTO posts (title,description, user_id)
VALUES
($1, $2, $3);`;
const sqlValues = [newTitle,newDescription, user_id]
pool.query(sqlQuery, sqlValues)
.then ((response) => {
    res.sendStatus(201)
})
.catch((error) => {
    console.log('error in /api/post Post',error);
    res.sendStatus(500);
})
})
router.put('/', (req, res) => {
    // Update this single student
    const idToUpdate = req.user.id;
    const sqlText = `
      UPDATE posts
        SET "title"=$1, "description"=$2
        WHERE id=$3
    `;
    pool.query(sqlText, [req.body.title, req.body.description, idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.delete('/:id', rejectUnauthenticated, (req,res) => {
    const idToDelete = req.params.id;
    const userId = req.user.id;
    const sqlQuery= `DELETE FROM "posts" WHERE "id"=$1 AND "user_id"=$2;`;
    const sqlValues = [idToDelete, userId];
    pool.query(sqlQuery, sqlValues)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlQuery}`, error);
            res.sendStatus(500);
        });
});




module.exports = router