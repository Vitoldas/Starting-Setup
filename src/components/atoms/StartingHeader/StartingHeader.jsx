import React from 'react';
import './startingHeader.scss';

function StartingHeader() {
  const startingTemplate = 'Starting template';
  return (
    <div>
      <h1 className="starting-header__h1">{startingTemplate}</h1>
    </div>
  );
}

export default StartingHeader;
