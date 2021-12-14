// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore";
import { db } from ".";

export async function seedData() {
  const docRef = await addDoc(collection(db, "histories"), {
    timeSeries: {
      timestamps: [1634303721, 1634403721, 1634503721, 1634603721, 1634703721],
      portfolioValue: [12000, 12060, 12077, 12088, 12202],
    },
  });

  console.log("Document written with ID: ", docRef.id);
}
