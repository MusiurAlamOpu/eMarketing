import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
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
        const { displayName, photoURL } = result.user;
        console.log(displayName, photoURL);
        const userInfo = {
          name: displayName,
          isLoggedIn: true,
          imageUrl: photoURL,
        };
        setLoggedInUser(userInfo);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error, error.code, error.message);
      });
  };
  console.log(loggedInUser);
  return (
    <div style={{textAlign: 'center'}}>
      <Button style={{margin: '5%', fontWeight: '600', border: '1px solid skyblue', color: 'skyblue'}} onClick={handleLogInButton}>Log In</Button>
    </div>
  );
};

export default LogIn;
