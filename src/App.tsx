import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import { IonHeader, IonToolbar, IonApp, IonBackButton } from "@ionic/react";
function App() {
    return (
        <IonApp>
            <Router>
                <IonHeader>
                    <IonToolbar>
                        {/* <IonBackButton /> */}
                        <Link to="/">
                            <img className="logo" alt="logo" src="logo.png" />
                        </Link>
                    </IonToolbar>
                </IonHeader>
                <Switch>
                    <Route path="/detail/:consult/:id">
                        <Detail />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </IonApp>
    );
}

export default App;
