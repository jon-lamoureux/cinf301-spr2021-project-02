import React, { useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState('3');
  const [dob, setDob] = useState('2');
  const [email, setEmail] = useState('1');

  function setData(test) {
    setUsername(test);
    setDob("5");
    setEmail("6");
  }

   const data = { username: username, dob: dob, email: email };
   return (
     <div>
      <button onClick={() => setData("test")}></button>
      <div>Enter a name: <input type="text" id="fname" name="fname" /></div>
      <div>{data}</div>
    </div>
    );
}
