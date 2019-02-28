import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = () => {
  return (
    <div
      className='ui grid horontally padded centered middle aligned portfolio-grid'
      style={{ backgroundColor: 'rgb(20, 24, 31)', paddingTop: '50px' }}
    >
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </div>
  );
};

export default PortfolioGrid;
