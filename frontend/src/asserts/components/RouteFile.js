import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "/Users/Nandhini M/AnywhereFitness/Anywhere-Fit-BE/frontend/src/App";
import Login from "./Login";
const RouteFile=()=>{
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

export default RouteFile;