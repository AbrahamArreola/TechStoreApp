import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { IndexScreen } from "./pages/IndexScreen";
import { StoreScreen } from "./pages/store/StoreScreen";
import "./assets/scss/styles.scss";
import { ProductScreen } from "./pages/store/ProductScreen";
import { SWRConfig } from "swr";

const fetcher = (
    ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then((response) => response.json());

function App() {
    return (
        <SWRConfig value={{ fetcher }}>
            <BrowserRouter>
                <div>
                    <Navbar />

                    <Switch>
                        <Redirect exact from="/" to="/index" />
                        <Route exact path="/index" component={IndexScreen} />
                        <Route
                            exact
                            path="/store/products"
                            component={StoreScreen}
                        />
                        <Route
                            exact
                            path="/store/products/:id"
                            component={ProductScreen}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        </SWRConfig>
    );
}

export default App;
