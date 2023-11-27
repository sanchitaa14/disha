import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ username, message, timestamp }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust the format based on your preference
  };

  return (
    <div className="post">
      <div className="post-header">
        <span className="username">{username}</span>
        <span className="timestamp">{formatDate(timestamp)}</span>
      </div>
      <div className="post-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Post;
