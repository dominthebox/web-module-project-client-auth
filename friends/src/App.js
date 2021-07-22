import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';

import {  Route, Link, Switch } from 'react-router-dom';



function App() {

  return (
    <div className="App">
        <h1>Hello Friends!</h1>
        <Link to="/friends" style={{ marginRight: "16px" }}>
          See All Your Friends
        </Link>
        <Link to="/friends/add-new">Add Friend</Link>
        <NavBar />

      <Switch>

        <PrivateRoute path="/friends/add-new" component={AddFriendForm}/>
        <PrivateRoute path="/friends" component={FriendsList}/>


        <Route path="/login">
          <Login />
        </Route>

        <Route>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
