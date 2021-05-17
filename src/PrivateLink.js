import React from "react";
import { Link }  from "react-router-dom";
import { useAuth } from "./context/auth";

export function PrivateLink({ ...rest }) {
  const { authTokens } = useAuth();
  /*console.log("PrivateRoute,authTokens:"+authTokens+",sessionStorage:"+sessionStorage.tokens);*/
  return (
    authTokens ?  
    <Link {...rest}/> : ''
  );
}

export function PublicLink({ ...rest }) {
    const { authTokens } = useAuth();
    /*console.log("PrivateRoute,authTokens:"+authTokens+",sessionStorage:"+sessionStorage.tokens);*/
    return (
      !authTokens ?  
      <Link {...rest}/> : ''
    );
  }