import React from 'react';
import './Modal.css';

const Modal = props => {
  console.log(props.project);

  const project = props.project;

  const modalClose = () => {
    props.modalClose();
  };

  if (project.title) {
    console.log('viewing modal');
    return (
      <div className='portfolio-modal displayBlock' id='project-website1'>
        <div className='modal-content'>
          <div className='modal-close' onClick={modalClose}>
            <svg
              enableBackground='new 0 0 26 26'
              id='Слой_1'
              version='1.1'
              viewBox='0 0 26 26'
              xmlSpace='preserve'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <path
                d='M14.0605469,13L24.7802734,2.2802734c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469  s-0.7675781-0.2929688-1.0605469,0L13,11.9394531L2.2802734,1.2197266c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L11.9394531,13L1.2197266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C1.3662109,24.9267578,1.5576172,25,1.75,25s0.3837891-0.0732422,0.5302734-0.2197266L13,14.0605469l10.7197266,10.7197266  C23.8662109,24.9267578,24.0576172,25,24.25,25s0.3837891-0.0732422,0.5302734-0.2197266  c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L14.0605469,13z'
                fill='#1D1D1B'
              />
            </svg>
          </div>
          <div className='container'>
            <h2>{project.title}</h2>
            <p>{project.content}</p>
            <ul className='project-links'>
              <li>
                <a href={project.link}>
                  <svg viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'>
                    <title />
                    <g>
                      <path d='M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z' />
                      <path d='M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z' />
                      <path d='M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z' />
                    </g>
                  </svg>
                  <span>Site</span>
                </a>
              </li>
              <li>
                <a href={project.github}>
                  <svg
                    id='Layer_1'
                    height='512px'
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    version='1.1'
                    viewBox='0 0 512 512'
                    width='512px'
                    xmlSpace='preserve'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <style
                      type='text/css'
                      dangerouslySetInnerHTML={{
                        __html: '.st0{fill-rule:evenodd;clip-rule:evenodd;}'
                      }}
                    />
                    <g>
                      <path
                        className='st0'
                        d='M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z'
                      />
                    </g>
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    console.log('no modal');
    return <div />;
  }
};

export default Modal;
