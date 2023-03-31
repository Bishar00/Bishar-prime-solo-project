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

/** ---------- Multer | S3 ---------- **/
require('dotenv').config();
const multer = require('multer');
const { s3Uploadv2 } = require('../s3Service');
const { Try } = require('@mui/icons-material');

const fileFilter = (req, file, cb) =>{
    if(file.mimetype.split('/')[0] === 'image'){
      cb(null, true)
    } else{
      cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false)
    }
}

const storage = multer.memoryStorage()

const upload = multer({ storage, fileFilter })


router.post('/', upload.single("image"), async (req, res) => {
    try {
      console.log('issue with req.file', req.file);
      const result = await s3Uploadv2(req.file);
      const imageFile = result.Location;
      const brandName = req.body.brand_name;
      const logo = req.body.logo_upload;
      const vision = req.body.entity_vision;
      const user_id = req.user.id;
  
      const sqlQuery = `
        INSERT INTO profile (brand_name, logo_upload, entity_vision, image_upload, user_id)
        VALUES ($1, $2, $3, $4, $5)
      ;`;
  
      const sqlValues = [brandName, logo, vision, imageFile, user_id];
  
      await pool.query(sqlQuery, sqlValues);
  
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "failure", message: error.message });
    }
});


module.exports = router;