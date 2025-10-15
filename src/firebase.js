import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpjj7nxleris8Pk4iyzEyrfC0qej9ilLI",
  authDomain: "netflix-clone-a865c.firebaseapp.com",
  projectId: "netflix-clone-a865c",
  storageBucket: "netflix-clone-a865c.firebasestorage.app",
  messagingSenderId: "266058286596",
  appId: "1:266058286596:web:8d38732b62be72b71c5751"
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore Database
const auth = getAuth(app);
const db = getFirestore(app);


//  Function to register a new user with email and password
//  Also adds user data to the Firestore "user" collection
const signup = async (name, email, password) => {
  try {
    // Create user in Firebase Authentication
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Store additional user info in Firestore
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

//Function to sign in an existing user
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error); 
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

// Function to sign out the current user
const logout = () => {
  signOut(auth);
};

// Export auth and db objects and authentication functions
export { auth, db, login, signup, logout};