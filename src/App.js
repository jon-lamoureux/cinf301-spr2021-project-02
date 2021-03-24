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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [username, setUsername] = useState(faker.internet.userName());
  const [email, setEmail] = useState(faker.internet.email());

  function insertData(date, username, email) {
      setStartDate(date);
      setUsername(username);
      setEmail(email);
      window.location.href="/profile";
  }

  function renderProfile(prop) {
    return <Profile stats={prop} />;
  }

  const prop = { startDate: startDate, username: username, email: email };
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
      Username: <input type="text" value={username} id="username"/>
      <br/>
      Email: <input type="text" value={email} id="email"/>
      <br/>
      Birthdate: <DatePicker selected={startDate} onChange={date => setStartDate(date)} id="date"/>
      <br/>
      <button onClick={() => insertData(startDate, document.getElementById('username').value, document.getElementById('email').value)}>Submit</button>
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
