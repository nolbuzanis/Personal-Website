import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = ({ projects }) => {
  console.log(projects);

  const portfolioList = projects.map(project => {
    return <PortfolioItem title={project.title} img={project.img} />;
  });

  return (
    <div
      className='ui grid horontally padded centered middle aligned
      portfolio-grid'
      style={{ backgroundColor: 'rgb(20, 24, 31)', paddingTop: '50px' }}
    >
      {portfolioList}
    </div>
  );
};

export default PortfolioGrid;
