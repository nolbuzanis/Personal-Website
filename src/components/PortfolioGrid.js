import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = ({ projects, selectProject }) => {
  const portfolioList = projects.map(project => {
    return (
      <PortfolioItem
        key={project.title}
        title={project.title}
        img={project.img}
        selectProject={selectProject}
        content={project.content}
        link={project.link}
        github={project.github}
      />
    );
  });

  return (
    <div
      id='projects'
      className='ui grid horontally padded middle aligned
      portfolio-grid'
      style={{
        backgroundColor: 'rgb(20, 24, 31)',
        margin: '0 auto',
        padding: '50px 20px'
      }}
    >
      {portfolioList}
    </div>
  );
};

export default PortfolioGrid;
