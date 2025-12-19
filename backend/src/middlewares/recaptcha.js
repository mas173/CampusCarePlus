const verifyRecaptcha = require("../utils/verifyRecaptcha");

const tokenVerify = async (req, res, next) => {
  try {
    const { token } = req.body;

    if (!token) return res.status(400).json({ message: "token missing . ." });

    const verify_resp = await verifyRecaptcha(token);
    // console.log(verify_resp);

    if (!verify_resp.success) {
      return res.status(400).json({ message: "captcha verification failed" });
    }

    next();
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:"failed to verify captcha"})
  }
};

module.exports = tokenVerify;
