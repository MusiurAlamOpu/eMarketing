import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admins, setAdmins] = useState([]);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  //admin checking
  let adminArray = [];
  useEffect(()=>{
    fetch("https://fast-tor-66437.herokuapp.com/addAdmin")
    .then(res=>res.json())
    .then(data=>{
      setAdmins(data)
    })
  },[])
  admins.map(admin => adminArray.push(admin.email));
  // console.log(adminArray);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleLogInButton = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;
        // var token = credential.accessToken;
        const { displayName, photoURL, email } = result.user;
        const userInfo = {
          name: displayName,
          isLoggedIn: true,
          imageUrl: photoURL,
          email: email,
          isAdmin: false,
          isUser: false
        };
        if(email === adminArray[0] || email === adminArray[1]){
          userInfo.isAdmin = true;
        }else{
          userInfo.isUser = true;
        }
        setLoggedInUser(userInfo);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error, error.code, error.message);
      });
  };
  return (
    <div style={{textAlign: 'center'}}>
      <Button style={{margin: '5%', fontWeight: '600', border: '1px solid skyblue', color: 'skyblue'}} onClick={handleLogInButton}>Log In</Button>
    </div>
  );
};

export default LogIn;

// Object.size = function (obj) {
//   var size = 0,
//     key;
//   for (key in obj) {
//     if (obj.hasOwnProperty(key)) size++;
//   }
//   return size;
// };
