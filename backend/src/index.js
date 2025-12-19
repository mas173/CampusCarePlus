const express = require("express");
const router = require("./routes/routes");
const dotenv = require("dotenv").config()
const cors = require("cors")


const app = express();

const PORT = process.env.PORT || 3000;


//routes
app.use(cors({
    origin: process.env.frontend_url, 
    credentials: true,               
  }))
app.use("/api/campuscare",router)


app.listen(PORT, ()=>{

  console.log(`server running on port : ${PORT}`)
})