const express =require("express");
const { home } = require("../controllers/campuscare");
const upload = require("../middlewares/upload");
const tokenVerify = require("../middlewares/recaptcha");
const submitIssue = require("../controllers/issue.controller");


const router = express.Router();


router
.post("/",(req,res)=>{
  res.status(200).json({
    status:true
  })
})
.post("/submit",upload.single("image"),tokenVerify,submitIssue)




module.exports = router;