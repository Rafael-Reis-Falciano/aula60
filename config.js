 import * as firebase from "firebase";

//inicialize seu banco de dados

const firebaseConfig = {

  apiKey: "AIzaSyBpeN1Cktx0ivI0hMFoJ3OzL48c9gecHeY",

  authDomain: "projetoc60-11172.firebaseapp.com",

  databaseURL: "https://projetoc60-11172-default-rtdb.firebaseio.com",

  projectId: "projetoc60-11172",

  storageBucket: "projetoc60-11172.appspot.com",

  messagingSenderId: "774215415052",

  appId: "1:774215415052:web:86df037da42ba58c184529"

};

if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
 

  