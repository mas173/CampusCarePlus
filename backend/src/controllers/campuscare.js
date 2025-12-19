

const home = async (req, res)=>{

  res.status(200).json(async (req, res) => {
  await db.collection("test").add({
    msg: "Firebase admin working",
    time: new Date(),
  });

  res.json({ message: "Firebase write successful" });
})

}


module.exports = {home}