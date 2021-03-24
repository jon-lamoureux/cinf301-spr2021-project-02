import React from "react";
import {Card, ListGroup} from 'react-bootstrap'
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {
   return (
        <div>
     <Card style={{ width: '30rem' }}>
  <Card.Header><FontAwesomeIcon icon={faIdBadge} />  User #{props.stats.id}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Username: {props.stats.username}</ListGroup.Item>
    <ListGroup.Item>Email: {props.stats.email}</ListGroup.Item>
    <ListGroup.Item>Birthday: {props.stats.startDate}</ListGroup.Item>
  </ListGroup>
</Card>
    </div>
    );
}
Profile.propTypes = {
  stats: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })
}
