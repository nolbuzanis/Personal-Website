import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = () => {
  return (
    <div className='ui grid horontally padded centered middle aligned'>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </div>
  );
};

export default PortfolioGrid;
