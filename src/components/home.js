import React from 'react';
import faker from 'faker';
const home = () => {
    return (
      <div id='main'>
        <h4>Welcome to the index page! Here is some Latin. The Latin is printed using faker and does not involve hooks, so every time you revisit this page the paragraphs will be different.</h4>
        <h6>{faker.lorem.paragraphs()}</h6>
      </div>
    )
}

export default home
