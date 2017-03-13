import React, { PropTypes } from 'react';

import './message.scss';

const Message = props => {
  let isCurrentUser = false;
  if (props.name === props.messageName) {
    isCurrentUser = true;
  }
  
  return (
    <div className={isCurrentUser ? "message-container right" : "message-container"}>
      <div className={isCurrentUser ? "message-bubble red" : "message-bubble"}>{props.message}</div>
      <div className={isCurrentUser ? "message-name hide" : "message-name"}>{props.messageName}</div>
    </div>
  );
}

Message.propTypes = {
  message: React.PropTypes.string,
  messageName: React.PropTypes.string,
  name: React.PropTypes.string,
  currentRoom: React.PropTypes.object
};

export default Message;