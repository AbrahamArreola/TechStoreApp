import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { IndexScreen } from './pages/IndexScreen';
import { StoreScreen } from './pages/store/StoreScreen';
import './assets/scss/styles.scss';
import { ProductScreen } from './pages/store/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>

        <Switch>
          <Redirect exact from="/" to="/index" />
          <Route exact path="/index" component={IndexScreen} />
          <Route exact path="/store/products" component={StoreScreen} />
          <Route exact path="/store/products/:id" component={ProductScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
