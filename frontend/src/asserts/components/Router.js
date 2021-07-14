import React from "react";
import { Route,Switch } from "react-router-dom";
import App from "App.js";
const Route=()=>{
    return(
        <>
        <Switch>
            <Route exact path="/">
                <App/>
                
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/classes">
                <Classes/> 
            </Route>
            <Route path="/instructors">
                <Instructors/>

            </Route>
        </Switch>
        </>
    )
}