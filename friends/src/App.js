import './App.css';
import Login from './components/Login';
import Friends from './components/Friends';
import Friend from './components/Friend';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';

import {  Route, Link, Switch } from 'react-router-dom';



function App() {

  return (
    <div className="App">
  
      <NavBar />

      <Switch>
        <Route exact path='/' component={Login}/>
        <PrivateRoute exact path='/friends' component={Friends}/>
        <PrivateRoute exact path='/friends/:id' component={Friends}/>
      </Switch>
    </div>
  );
}

export default App;
