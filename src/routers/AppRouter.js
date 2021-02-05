import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {Navbar} from '../compnents/ui/Navbar';
import {Marvel} from '../compnents/marvel/Marvel';
import {LoginScreen} from '../compnents/login/LoginScreen';
export const AppRouter = () =>{
    return(
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/" component={Marvel}/>
                </Switch>
            </div>
        </Router>
    )
}