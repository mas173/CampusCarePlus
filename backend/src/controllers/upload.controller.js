const uploadImageController = async (req, res) => {
  try {
  
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file received",
      });
    }

    return res.status(200).json({
      success: true,
      imageUrl: req.file.path,
    });
  } catch (error) {
    console.log("Upload controller error:", error);

    return res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
  }
};

module.exports = uploadImageController;
