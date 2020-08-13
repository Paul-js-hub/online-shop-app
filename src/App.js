import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavHeader from './components/Header/index'
import Products from './components/Products/index'
import CartItem from './components/Cart/CartItem'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
      <NavHeader />
      <Switch>
      <Route exact path='/' component={Products} />
      <Route  path='/cart' component={CartItem} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
