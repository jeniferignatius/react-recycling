import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../img/earth-logo.png";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../context/auth";

function Login(props) {
  /* console.log(props); */
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  var referer = '/';
  if (props && props.location.state){
    referer = props.location.state.referer || '/';
  }  

  function postLogin() {
    axios.post("http://localhost:5000/auth/signin", {
      'email':username,
      password
    }).then(result => {
      if (result.status === 200 && result.data === "OK") {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="email"
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
          placeholder="Sähköposti"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Salasana"
        />
        <Button onClick={postLogin}>Kirjaudu sisään</Button>
      </Form>
      <Link to="/signup">Eikö sinulla ole vielä tiliä? Paina tästä linkistä.</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;