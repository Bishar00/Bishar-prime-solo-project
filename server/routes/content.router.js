// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// router.get('/:id', rejectUnauthenticated,(req,res) => {
//     const postsDataID = req.params.id;
//     console.log('req.params', postsDataID);
//     // console.log('this is the res',res);

//     const sqlQuery= `SELECT * FROM "content"
//         WHERE "id"=$1
//         ORDER BY "id";`

//     const sqlValues= [postsDataID];
//     pool.query(sqlQuery, sqlValues)
//         .then((dbRes) => {
//         res.send(dbRes.rows[0])
//         console.log(dbRes.rows);
//     }).catch((dbErr) => {
//         console.log('Get things failed:', dbErr);
//         res.sendStatus(500)
//     })
// })



// router.post('/', rejectUnauthenticated,(req,res) => {
// console.log(req.user);
// console.log('adding a new post to Posts', req.body);
// const newComment = req.body.comment
// const newLikes =req.body.likes
// const user_id = req.user.id
// const postsId = req.user.posts_id
// const sqlQuery = ` 
// INSERT INTO consent (comment,likes, user_id, postsId)
// VALUES
// ($1, $2, $3, $4);`;
// const sqlValues = [newComment,newLikes,user_id, postsId]
// pool.query(sqlQuery, sqlValues)
// .then ((response) => {
//     res.sendStatus(201)
// })
// .catch((error) => {
//     console.log('error in /api/post Post',error);
//     res.sendStatus(500);
// })
// })