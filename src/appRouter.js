import React from 'react';
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Login from './page/login/login';
import App from './page/App';

function AppRouter(){
    return(
        <Router>
            <Switch>
            <Route path='/login' component={Login} /> 
            <Route path='/' component={App} />
            </Switch>
        </Router>
    )
}

export default AppRouter;