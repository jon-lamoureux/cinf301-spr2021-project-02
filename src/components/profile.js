import React from "react";
import PropTypes from "prop-types";

export default function Profile(props) {
   return (
     <div>
      <span>User {props.stats.username} has an email address of {props.stats.email} and a birthdate of {props.stats.birthdate}</span>
    </div>
    );
}
Profile.propTypes = {
  stats: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired
  })
}
