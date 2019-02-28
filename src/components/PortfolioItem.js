import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = props => {
  var backgroundImg = require('../img/' + props.img);

  const onProjectClick = e => {
    props.selectProject(props);
  };

  return (
    <div
      className='portfolio-item'
      style={{
        background: `url(${backgroundImg}) center center no-repeat`,
        backgroundSize: 'cover'
      }}
      onClick={onProjectClick}
    >
      <div className='overlay'>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default PortfolioItem;
