const express =require("express");
const { home } = require("../controllers/campuscare");
const upload = require("../middlewares/upload");
const uploadImageController = require("../controllers/upload.controller");

const router = express.Router();


router
.get("/",home)
.post("/image",upload.single("image"),uploadImageController)


module.exports = router;