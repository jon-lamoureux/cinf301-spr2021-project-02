import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import faker from 'faker';

export default function Settings() {
  const [startDate, setStartDate] = useState(new Date());
  const [username, setUsername] = useState(faker.internet.userName());
  const [email, setEmail] = useState(faker.internet.email());

  function insertData(date, username, email) {
      setStartDate(date);
      setUsername(username);
      setEmail(email);
      window.location.href="/profile";
  }
  return (
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
  );
}
