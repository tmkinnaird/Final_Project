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
        <Link to='/Index'> Shop </Link> <br/>
        <Link to='/CartPage'> Your Cart </Link> <br/>
      <Switch>
        <Route path='/CartPage' component={CartPage} />
        <Route path='/ShowPage/:id' render={routerProps => {
          return <ShowPage routerProps={routerProps}
         /> }} />
        <Route exact path='/Index' component={Index} />
      </Switch>
      {/* <Index /> */}
      </Router>
      
    </div>
  );
}

export default App;
