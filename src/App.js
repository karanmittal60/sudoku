import React from 'react';
import {AppProvider} from "./context/AppContext";
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {routeRules} from "./routes/routeRules";
import {routesData} from "./routes/routesData";
import AppRoute from "./layoutRoute/AppRoute";
import DefaultRoute from "./layoutRoute/DefaultRoute";

function App() {
    return (
        <AppProvider>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to={routeRules.login}/>
                    </Route>
                    {
                        routesData.map(route => {
                            if (route.auth){
                                return <AppRoute {...route}/>
                            } else {
                                return <DefaultRoute {...route}/>
                            }
                        })
                    }
                </Switch>
            </Router>
        </AppProvider>
    );
}

export default App;
