import React, { lazy, Suspense } from "react";
import StateProvider from "./context/StateProvider";
import { AuthProvider } from "./authentication/Auth";
import PrivateRoute from "./authentication/PrivateRoute";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { initialState, reducer } from "./reducers";
import { StyledApp } from "./styles/StyledPage";
import LoadingView from "./components/LoadingView";
import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";

// Pages
const Home = lazy(() => import("./pages/Home"));
const Test = lazy(() => import("./pages/Test"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <AuthProvider>
                <StateProvider initialState={initialState} reducer={reducer}>
                    <StyledApp>
                        <ToolBar />
                        <Suspense fallback={<LoadingView />}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/test" component={Test} />
                                <PrivateRoute
                                    exact
                                    path="/profile"
                                    component={Profile}
                                />
                                <Route
                                    exact
                                    path="/sign-up"
                                    component={SignUp}
                                />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="*" component={NotFound} />
                            </Switch>
                        </Suspense>
                        <Footer />
                    </StyledApp>
                </StateProvider>
            </AuthProvider>
        </Router>
    );
};

export default App;
