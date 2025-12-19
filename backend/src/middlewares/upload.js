const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudnary  = require("../config/cloudnary")
const storage = new CloudinaryStorage({
  cloudinary:cloudnary,
  params: {
    folder: "campuscare/issues",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});

module.exports = upload;
