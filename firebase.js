import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDmtCUy73ygnKll14P7YqvEziE9ovdnOhg",
    authDomain: "sampleproject-5645a.firebaseapp.com",
    projectId: "sampleproject-5645a",
    storageBucket: "sampleproject-5645a.appspot.com",
    messagingSenderId: "680211314527",
    appId: "1:680211314527:web:29f9eff4cd115e3c0068ea",
    measurementId: "G-VCL4MH0NJK"
});

export const firestore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
// export const storage = getStorage(firebaseApp);
// export const db = {
//   engineering: "Engineering",
//   formatedDoc: (doc) => {
//     return { id: doc.id, ...doc.data() };
//   },
//   getCurrentTimeStamp: serverTimestamp,
// };