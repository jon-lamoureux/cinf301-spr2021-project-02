import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.js';
import Header from './components/header.js'
import Profile from './components/profile.js'
import Footer from './components/footer.js'
import Settings from './components/settings.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
    <Router>
    <Header />
    <Switch>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/settings">
      <Settings />
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
