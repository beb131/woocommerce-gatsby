import React, { useState, useEffect } from "react";
import Login from "../Login/index";
import Dashboard from "../Dashboard/index";
import ATCButton from "../ATCButton";

const Auth = (props) => {
  const {
    login: [login, setLogin],
  } = {
    login: useState(""),
    ...(props.state || {}),
  };

  const siteURL = "http://localhost:3030";

  useEffect(() => {
    const localLogin = localStorage.getItem("login");
    if (localLogin) {
      setLogin(localLogin);
    }
  }, [login]);

  return (
    <div className="App container">
      {login && <Dashboard url={siteURL} token={login} setLogin={setLogin} />}
      {!login && <Login url={siteURL} setLogin={setLogin} />}
      <p>
        For testing a known-good token. Having issues with the context api in
        AuthWrapper component.
      </p>
      <ATCButton product_id="87" token={login} />
    </div>
  );
};

export default Auth;
