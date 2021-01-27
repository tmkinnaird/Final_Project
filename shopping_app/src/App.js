import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import CartPage from './Components/CartPage.js'
import ShowPage from './Components/ShowPage.js'
import Index from './Components/Index.js'

function App() {
  return (
    <div className="App">
      <h1>Warfield Golf Apparel</h1>
      <h2>Dress for Success on the Course</h2>
      <Router>
        <div className='nav-routes'/>
        <Link to='/'> Shop </Link> <br/>
        <Link to='/CartPage'> Your Cart </Link> <br/>
        <Link to='/ShowPage'> Product Descriptions </Link> <br/>
      <Switch>
        <Route path='/CartPage' component={CartPage} />
        <Route path='/ShowPage' component={ShowPage} />
      </Switch>
      </Router>
      <Index />
    </div>
  );
}

export default App;
