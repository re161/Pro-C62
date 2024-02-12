import firebase from "firebase";
 
 const firebaseConfig = {
  apiKey: "AIzaSyCXFnGsmmIFdP2hzufqMgKcZ0oSkQOJndw",
  authDomain: "pro---60-student.firebaseapp.com",
  projectId: "pro---60-student",
  storageBucket: "pro---60-student.appspot.com",
  messagingSenderId: "913255785305",
  appId: "1:913255785305:web:00a4e9bd891e41f02be248"
};
//initialize your database
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
  export default firebase.database()
 

  