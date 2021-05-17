import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../img/omnia_logo.png";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";

function Signup(props) {
  const [isSignedUp, setSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  if (isSignedUp) {
    return <Redirect to={{ pathname: "/login" }} />;
  }


  function postSignup() {
    /* axios.post("http://localhost/testit/react_testi.php", { */
    /* var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password); */
    axios.post("http://localhost:5000/auth/signup", {
      email,
      username,
      password,
      password2
      })
      .then(result => {
      if (result.status === 200 && result.data === "OK") {
        setSignedUp(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input 
          type="email" 
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            }} 
          placeholder="email"/>
        <Input 
          type="text" 
          value={username}
          onChange={e => {
            setUsername(e.target.value);
            }} 
          placeholder="username"/>  
        <Input 
          type="password" 
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            }}
          placeholder="password" />
        <Input 
          type="password" 
          value={password2}
          onChange={e => {
            setPassword2(e.target.value);
            }}
          placeholder="password again" />
        <Button onClick={postSignup}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
      { isError && <Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Signup;

