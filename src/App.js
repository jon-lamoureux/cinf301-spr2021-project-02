import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import faker from 'faker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.js';
import Header from './components/header.js'
import Profile from './components/profile.js'
import Footer from './components/footer.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Nav, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [username, setUsername] = useState(faker.internet.userName());
  const [email, setEmail] = useState(faker.internet.email());
  const [userid, setUserID] = useState(faker.random.number());

  function insertData(date, username, email, userid) {
      setStartDate(date);
      setUsername(username);
      setEmail(email);
      setUserID(userid);
      document.getElementById("status").style.display="block";
  }

  function renderProfile(prop) {
    return <Profile stats={prop} />;
  }

  const prop = { startDate: String(startDate), id: userid, username: username, email: email };
  return (
    <div>
    <Router>
    <Header />
    <Switch>
    <Route path="/profile">
      <div>{renderProfile(prop)}</div>
    </Route>
    <Route path="/settings">
    <div id='center'>
      <h1>User Settings</h1>
      <div>User ID: <input type="text" defaultValue={userid} id="userid"/></div>
      <br/>
      <div>Username: <input type="text" defaultValue={username} id="username"/></div>
      <br/>
      <div>Email: <input type="text" defaultValue={email} id="email" /></div>
      <br/>
      <div>Birthdate: <DatePicker selected={startDate} showTimeSelect onChange={date => setStartDate(date)} id="date"/></div>
      <br/>
      <Button id="button" onClick={() => insertData(startDate, document.getElementById('username').value, document.getElementById('email').value, document.getElementById('userid').value)}>Submit</Button>
      <div id="status"><LinkContainer to="/profile"><Nav.Link>Profile updated!</Nav.Link></LinkContainer></div>
    </div>
    </Route>
    <Route path="/">
      <Home />
      </Route>
    </Switch>
    <Footer />
    </Router>
    </div>
  );
}
