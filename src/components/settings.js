import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import faker from 'faker';

export default function Settings() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div id='center'>
      <h1>User Settings</h1>
      Username: <input type="text" value={faker.internet.userName()}/>
      <br/>
      Email: <input type="text" value={faker.internet.email()}/>
      <br/>
      Birthdate: <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <br/>
      <button>Submit</button>
    </div>
  );
}
