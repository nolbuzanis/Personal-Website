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
    <div id='projects' style={{ backgroundColor: 'rgb(20, 24, 31)' }}>
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          fontVariant: 'small-caps',
          fontSize: '40px',
          paddingTop: '60px',
          margin: '0'
        }}
      >
        Portfolio
      </h1>
      <div
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
    </div>
  );
};

export default PortfolioGrid;
