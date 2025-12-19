const home = async (req, res)=>{

  res.status(200).json({
    name:"campuscare+",
    status:"online"
  })

}


module.exports = {home}