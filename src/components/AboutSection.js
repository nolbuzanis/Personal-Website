import React from 'react';
import './AboutSection.css';

const AboutDetail = () => {
  return (
    <div className='about-section ui grid'>
      <div className='five wide column'>
        <div className='profile-image' />
      </div>
      <div className='eleven wide column profile-description'>
        <p>Some text</p>
      </div>
    </div>
  );
};

export default AboutDetail;
