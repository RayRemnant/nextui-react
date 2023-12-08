// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics";
 */ import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBIAe8XYWiz_y5Ase4LPSwLnXvbbU-iX3g",
	authDomain: "moore-6ed4e.firebaseapp.com",
	projectId: "moore-6ed4e",
	storageBucket: "moore-6ed4e.appspot.com",
	messagingSenderId: "965359363638",
	appId: "1:965359363638:web:9e5f2362bf3d1ee412da97",
	measurementId: "G-JL93F891TV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

import { GPU } from "./interfaces";

import { collection, addDoc } from "firebase/firestore";

export let addDocument = async (document: GPU) => {
	try {
		const docRef = await addDoc(collection(db, "gpu"), document);
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

 