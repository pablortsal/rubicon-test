import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/detail">
                        <Detail />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
