const { S3 } = require("aws-sdk");
const uuid = require("uuid").v4;

exports.s3Uploadv2 = async (file) => {
    const s3 = new S3()

    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key:`uploads/${uuid()}-${file.name}`,
        Body: file.buffer
    };
    return await s3.upload(parm).promise();
};


// const storage = multer.memoryStorage()

// const fileFilter = (req, file, cb) =>{
//   if(file.mimetype.split('/')[0] === 'image'){
//     cb(null, true)
//   } else{
//     cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false)
//   }
// }
// const upload = multer({ 
//   storage,
//   fileFilter, 
//   limits:{fileSize: 104857600} })

// app.post('/upload', upload.single("file"), async (req, res)=>{
//   // req.file is the file we get from the client
//   // console.log(req.file)
//   // then we want to send it into s3 AWS
//   console.log(req.file)
  
//   const result = await s3Uploadv2(req.file)
//   res.json({ status: "success", result })
// })
// //Checking for multer errors
// app.use((error, req, res, next) =>{
//   if (error instanceof multer.MulterError){
//     if( error.code === "LIMIT_FILE_SIZE"){
//       return res.status(400).json({
//         message: 'file is too large'
//       })
//     }
//     if( error.code === "LIMIT_UNEXPECTED_FILE"){
//       return res.status(400).json({
//         message: 'Wrong file type'
//       })
//     }
//   }
// })