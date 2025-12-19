const { db, admin } = require("../config/firebase");

const addIssueToDB = async (data) => {
  const docRef = await db.collection("issues").add({
    ...data,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return docRef.id; // document ID
};

module.exports = addIssueToDB;
