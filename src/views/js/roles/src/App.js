import React from 'react';
import './acr.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Roles from "./pages/Roles";
import New from "./pages/New";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path={'/acr/roles/user/:id'} component={Roles}/>
                <Route exact path={'/acr/roles/new'} component={New}/>
                <Route exact path={'/acr/roles/new/:id'} component={New}/>
            </Switch>
        </HashRouter>
    )
}

export default App;
