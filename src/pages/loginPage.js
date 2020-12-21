import React from "react";
import Login from "../components/auth/logReg";
import { Container } from "react-bootstrap"
import "./pages.css"

const LoginPage = () => {

  return (
    <Container className = "d-flex cardPos" >
      <div className = "loginCard">
        <Login />
      </div>
    </Container>

  );
};

export default LoginPage;