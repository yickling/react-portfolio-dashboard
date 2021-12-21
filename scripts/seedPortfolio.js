const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const myEnv = dotenv.config();
dotenvExpand(myEnv);

console.error(myEnv);
const { doc, setDoc, getFirestore } = require("firebase/firestore");
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");

const { getAnalytics } = require("firebase/analytics");
const configFile = require("../src/.firebaseConfig.json");

if (process.env.REACT_APP_FIREBASE_KEY === undefined) {
  console.error("REACT_APP_FIREBASE_KEY is undefined!");
  process.exit(1);
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  ...configFile,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedData() {
  const docRef = await setDoc(doc(db, "histories", "daily_20211220"), {
    timeSeries: {
      timestamps: [1634303721, 1634403721, 1634503721, 1634603721, 1634703721],
      portfolioValue: [11000, 12000, 13000, 14000, 15000],
    },
  });

  console.log("Document written with ID: ", docRef.id);
}

(async function seedPortfolioData() {
  await seedData();
})();
