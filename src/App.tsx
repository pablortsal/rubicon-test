import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import {
    IonHeader,
    IonToolbar,
    IonApp,
    IonBackButton,
    IonButtons,
    IonButton,
} from "@ionic/react";
import { Mock } from "./mocks/documents";
import {
    DATA_MOCK_STORAGE,
    StorageService,
} from "./services/local/Storage/StorageSerivce";
function App() {
    const [dataReady, setDataReady] = useState(false);

    const prepareData = useCallback(async (force?: boolean) => {
        setDataReady(false);
        let data = window.localStorage.getItem(DATA_MOCK_STORAGE);
        if (!data || force)
            await StorageService.setItem(DATA_MOCK_STORAGE, Mock);
        setDataReady(true);
    }, []);

    useEffect(() => {
        prepareData();
    });
    return (
        <IonApp>
            <Router>
                <IonHeader>
                    <IonToolbar>
                        <Link to="/">
                            <img className="logo" alt="logo" src="logo.png" />
                        </Link>
                        <IonButtons slot="end">
                            <IonButton
                                fill="outline"
                                onClick={() => {
                                    prepareData(true);
                                }}
                            >
                                Reset
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                {dataReady && (
                    <Switch>
                        <Route path="/detail/:consult/:id">
                            <Detail />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>
                    </Switch>
                )}
            </Router>
        </IonApp>
    );
}

export default App;
