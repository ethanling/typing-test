import React, { lazy, Suspense } from "react";
import StateProvider from "./context/StateProvider";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { initialState, reducer } from "./reducers";
import { StyledApp } from './styles/StyledPage';
import LoadingView from './components/LoadingView';
import Footer from './components/Footer';

// Pages
const Home = lazy(() => import("./pages/Home"));
const Test = lazy(() => import("./pages/Test"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <StateProvider initialState={initialState} reducer={reducer}>
                <StyledApp>
                    <Suspense fallback={<LoadingView />}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/test" component={Test} />
                            <Route path="/profile" component={Profile} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Suspense>
                    <Footer />
                </StyledApp>
            </StateProvider>
        </Router>
    );
};

export default App;