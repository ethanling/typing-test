import React, { lazy, Suspense } from "react";
import KeyProvider from "./context/KeyProvider";
import { StyledApp } from "./styles/StyledApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoadingView from './components/LoadingView';
// Pages
const Home = (
    lazy(() => (
        import("./pages/Home")
    ))
)
const Test = (
    lazy(() => (
        import("./pages/Test")
    ))
)
const NotFound = (
    lazy(() => (
        import("./pages/NotFound")
    ))
)

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <StyledApp>
                <KeyProvider>
                    <Suspense fallback={<LoadingView />}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/test" component={Test} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Suspense>
                </KeyProvider>
            </StyledApp>
        </Router>
    );
}

export default App;
