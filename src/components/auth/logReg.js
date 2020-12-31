import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authenticationContext'
import { Link, useHistory } from "react-router-dom"
import "./auth.css";



const LogReg = () => {
    const loginEmailRef = useRef();
    const loginPassRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { login } = useAuth()
    const { signUp } = useAuth()
    const [errorLogin, setLoginError] = useState("")
    const [errorReg, setRegError] = useState("")
    const [successReg, setRegSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const { setLoggedIn } = useAuth();


    async function handleLogin(e) {
        e.preventDefault()

        try {
            setLoginError("")
            setLoading(true)
            await login(loginEmailRef.current.value, loginPassRef.current.value)
            setLoggedIn(true)
            history.push("/")
        }
        catch {
            setLoginError('Sign In Failed, Please Try Again!')
            setLoggedIn(false)
        }
        setLoading(false)
    }

    async function handleReg(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setRegError("Passwords do not match")
        }

        try {
            setRegError("")
            setLoading(true)
            signUp(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            return setRegError("Registration Failed")
        }

        setLoading(false)
    }

    return (
        <>
            <Card className="login-card">
                <Card.Body>
                    {/* <img>LOGO HERE</img> */}
                    {/* Login */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg">
                                <h1 className="text-center login_header"> Login</h1>
                                {errorLogin && <Alert variant="danger" className="err_login">{errorLogin} </Alert>}
                                <Form onSubmit={handleLogin}>
                                    <Form.Group className="text-left" id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={loginEmailRef} required ></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="text-left" id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={loginPassRef} required ></Form.Control>
                                    </Form.Group>

                                    <Button disabled={loading} className="btnLogin" type="submit" > Login</Button>
                                    {/* <Button className="btnGAuth"><img src="../../../public/gimage.png" /></Button> */}
                                </Form>
                            </div>
                            {/* Sign Up */}
                            <div className="col-lg">
                                <h1 className="text-center reg_header">Register</h1>
                                {errorReg && <Alert variant="danger" className="err_reg">{errorReg}</Alert>}
                                <Form onSubmit={handleReg}>
                                    <Form.Group className="text-left" id="reg_email">
                                        <Form.Label >Email</Form.Label>
                                        <Form.Control type="email"  ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group className="text-left" id="reg-password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Form.Group className="text-left" id="password-confirm">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" ref={passwordConfirmRef} required />
                                    </Form.Group>
                                    <Button disabled={loading} className="btnReg" type="submit"  >
                                        Register
                                </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default LogReg;





