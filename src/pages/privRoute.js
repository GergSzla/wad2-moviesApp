import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/authenticationContext"


// https://codedaily.io/tutorials/49/create-a-protectedroute-for-logged-in-users-with-route-redirect-and-a-render-prop-in-react-router
  function PrivRoute({ component: Component, ...rest }){
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}

export default PrivRoute;
