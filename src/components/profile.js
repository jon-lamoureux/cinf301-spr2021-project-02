import React from "react";
import PropTypes from "prop-types";

export default function Profile(props) {
   return (
     <div>
      <div className="profile">User <span className="bold">{props.stats.username}</span> has an email address of <span className="bold">{props.stats.email}</span> and a birthdate of <span className="bold">{props.stats.startDate}</span></div>
    </div>
    );
}
Profile.propTypes = {
  stats: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired
  })
}
