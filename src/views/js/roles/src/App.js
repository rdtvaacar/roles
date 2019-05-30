import React from 'react';
import './acr.css';
import {HashRouter as Routes, Route, Switch} from "react-router-dom";
import Roles from "./pages/Roles";
import New from "./pages/New";

function App() {
    return (
        <Routes >
            <Switch>
                <Route exact path={'/acr/roles/user/:id'} component={Roles}/>
                <Route exact path={'/acr/roles/new'} component={New}/>
                <Route exact path={'/acr/roles/new/:id'} component={New}/>
            </Switch>
        </Routes>
    )
}

export default App;
