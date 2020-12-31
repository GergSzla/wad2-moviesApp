import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authenticationContext'
import { Link, useHistory } from "react-router-dom"
import "./prof.css";


export const UserProf = () => {
    const [error, setError] = useState("")
    const { currentUser, logOut } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
            await logOut()
            history.pushState('/login')
        }
        catch {
            setError("Sign Out Failed")
        }
    }

    return (
        <>
            <Card className="mt-5 card">
                <Card.Body>
                    <h1 className="text-center"> Account</h1>

                    <h4>Email:</h4>
                    <h2>{currentUser.email}</h2>
                </Card.Body>
                <div className="w-100 text-center mt-3">
                    {error && <Alert variant="danger">{error} </Alert>}
                    <Button onClick={handleLogout} type="submit" className="btn-logout"> Sign Out</Button>
                </div>
            </Card>

        </>
    )
}

export default UserProf;