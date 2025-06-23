// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase,ref,set,get,child} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO6VsEBILvh_PoTXyC0_soOXP2XcLyYBE",
  authDomain: "usersform-16326.firebaseapp.com",
  databaseURL: "https://usersform-16326-default-rtdb.firebaseio.com",
  projectId: "usersform-16326",
  storageBucket: "usersform-16326.appspot.com",
  messagingSenderId: "1022738618925",
  appId: "1:1022738618925:web:41cd05df76212b20e1b6a4",
  measurementId: "G-J7ECPXGQ8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getDatabase();
const auth = getAuth(app)

function addAddress(){
  const dbref = ref(db)
  get(child(dbref,'UsersAuthList/'+user.uid)).then((snapshot)=>{
    if (snapshot.exists()){
      house = snapshot.val().House;
    }
  })
}