import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import {auth, provider} from '../../dbConfig/firebase'

const Login = () => {

  const signin = () => {
    auth.signInWithPopup(provider)
    .catch(error => alert(error.message))
  };
  
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/0/05/Discord.svg"
          alt="discord logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Discord_Black_Text_Logo.svg"
          alt="discord text logo"
        />
      </div>
      <Button type="submit" onClick={signin}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
