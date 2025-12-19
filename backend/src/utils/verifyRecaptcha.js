const axios = require("axios");

const verifyRecaptcha = async (token) => {
  try {
    const res = await axios.post(
      process.env.CAPTCHA_VERIFY_URL,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: token,
        
        },
      }
    );

    return res.data; 

  } catch (err) {
    console.error("reCAPTCHA error:", err.message);
    return { success: false };
  }
};

module.exports = verifyRecaptcha;
