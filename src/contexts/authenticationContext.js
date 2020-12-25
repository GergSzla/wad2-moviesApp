import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../init-firebase"


const AuthentificationContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthentificationContext)
}

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [isLoggedIn, setLoggedIn] = useState(false)

    function logOut() {
        setLoggedIn(false)
        return auth.signOut()
    }
    
    function signUp(email, password) {
        var user_email = email
        //save user to DB (users/example@gmail.com/...) and AUTH
        db.ref("users/").set({
            id: user_email
        });
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

//https://stackoverflow.com/questions/64191896/usestate-in-useeffect-does-not-update-state
//https://stackoverflow.com/questions/62211434/firebase-react-read-document-in-auth-state-changed-and-add-it-to-context

    useEffect(() => {
        //takes in user and sets said user to cureent 
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, []);

    const value = {
        currentUser,
        isLoggedIn,
        setLoggedIn,
        signUp,
        login,
        logOut,

    }


    return (
        <AuthentificationContext.Provider
            value={value}  >
            {!loading && props.children}
        </AuthentificationContext.Provider>
    )
}

export default AuthContextProvider;