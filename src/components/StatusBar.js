import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const StatusBar = () => {

  const now = 60

  return(
    <div>
      <ProgressBar variant="success" now={now} label={`Hunger: ${now}%`} />
    </div>
  )
}

export default StatusBar;
