import React from 'react';
import {BrowserRouter as Router , Route , Redirect, Switch} from 'react-router-dom'
import './App.css';
import Books from './books/pages/Books';
import User from './user/pages/User';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
        <Route path="/" exact>
          <Books />
        </Route>
        <Route path="/profile" exact>
          <User />      
        </Route>
        <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );  
}

export default App;
