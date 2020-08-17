import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavHeader from './components/Header/index'
import ProductList from './components/Products/ProductList'
import Cart from './components/Cart/Cart'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
      <NavHeader />
      <Switch>
      <Route exact path='/' component={ProductList} />
      <Route  path='/cart' component={Cart} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
