import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const StatusBar = ({ color, percentage, label }) => {
  return(
    <div>
      <ProgressBar variant={color} now={percentage} label={label} />
    </div>
  )
}

export default StatusBar;
