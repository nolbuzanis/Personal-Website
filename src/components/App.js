import React from 'react';
import ContactList from './ContactList';
import PortfolioGrid from './PortfolioGrid';
import Modal from './Modal';
import Particles from 'react-particles-js';
//import AboutSection from './AboutSection';

import './App.css';

class App extends React.Component {
  state = { selected: {} };

  selectProject = selectedProject => {
    this.setState({ selected: selectedProject });
    this.setState({ modalOpen: true });
  };

  modalClose = () => {
    this.setState({ selected: {} });
  };

  render() {
    return (
      <div className='app'>
        <Particles className='particles' params={particleParams} />
        <div className='header'>
          <div className='header-content'>
            <h1>Nolan Buzanis</h1>
            <span>Engineer | Entrepreneur</span>
            <ContactList />
          </div>
          <a className='down-button' href='#projects'>
            <svg
              enableBackground='new 0 0 32 32'
              height='32px'
              id='Слой_1'
              version='1.1'
              viewBox='0 0 32 32'
              width='32px'
              xmlSpace='preserve'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <path
                id='Expand_More'
                d='M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z'
                fill='#121313'
              />
            </svg>
          </a>
        </div>
        <PortfolioGrid projects={projects} selectProject={this.selectProject} />
        <Modal project={this.state.selected} modalClose={this.modalClose} />
      </div>
    );
  }
}

const projects = [
  {
    title: 'LOUD Website',
    img: 'loud-website.png',
    content:
      'An eCommerce platform for LOUD, a speaker rental service located in Kingston, ON. Uses reusable React components and Redux for the front end, the Stripe API for easy credit card payments, and pushes customer orders to a Google Sheets Spreadsheet using App Scripts + GoogleSheets API. Hosted on Netlify with lambda functions.',
    github: 'https://github.com/nolbuzanis/Loud-Ktown-Website',
    link: 'http://www.loudktown.com'
  },
  {
    title: 'Personal Website 1',
    img: 'website1.png',
    content:
      'After becoming inspired by a variety of creative, online portfolios, I decided to learn HTML, CSS, and JavaScript to create my first online portfolio, a static website. This project is hosted by GitHub Pages and uses Jekyll to replicate modular elements of this website such as individual project pages.',
    github: 'https://github.com/nolbuzanis/nolanbuzanis.com',
    link: 'https://nolbuzanis.github.io/Old-Personal-Website/'
  },
  {
    title: 'Ecogrow',
    img: 'pottedplant.jpeg',
    content:
      'The EcoGrow module assists users with growing fresh fruits and vegetables through an Arduino-based monitoring system. The module is an enclosed insulated system which monitors a plant’s humidity, temperature, and light levels. Readings from the HTU21D humidity and temperature sensor, and the photodiode are outputted to an LCD which can be read by the user. The water control mechanism is controlled using a position servo motor, in which signals sent to the motor results in the movement of a rubber stopper, controlling the flow of water to the plant.',
    github: 'https://github.com/nolbuzanis/EcoGrow',
    link: null
  },
  {
    title: 'Bits Into Bites',
    img: 'bitsintobites.png',
    content:
      'React-based web app to use up leftover food in the fridge at the end of the week. Search terms are run through the Edamam API, and the results are displayed on the page, where each recipe has an image, calorie count, ingrdient list, health labels, and a link to the page the recipe was originally sourced from.',
    github: 'https://github.com/nolbuzanis/Bits-Into-Bites',
    link: 'https://nolbuzanis.github.io/Bits-Into-Bites/'
  },
  {
    title: 'Quadcopter',
    img: 'quadcopter-cool.jpg',
    content:
      'The design and build of an quadcopter, controlled via Arduino. Over 50 different hardware components were part of the final design, including custom 3D printed parts and a repurposed PS2 controller. Unfortunately, the drone was not completed due to the fact that it was stolen. Check out the link below for a video of the full build.',
    github: 'https://github.com/nolbuzanis/Autonomous-Drone',
    link: 'https://youtu.be/rW0U2fz6_Jw'
  },
  {
    title: 'Cannabot',
    img: 'cannabot.png',
    content:
      'An integrated skype chatbot used for the tracking, monitoring, and troubleshooting of the growing process for cannabis (and all other) plants. The project was built over the course of 30 hours at a Toronto Hackathon, Hack The Valley 2. We used Python to process the data and run it through a matching algorithm, and Node.js as the backend, using it to communicate with Microsoft’s LUIS machine learning API to determine user input. The user interacts with the chatbot via the Skype Bot framework, and the demo was displayed on a website using a combination of HTML, CSS, and Javascript through the Bootstrap library.',
    github: 'https://github.com/nolbuzanis/Canna-Bot',
    link: null
  },
  {
    title: 'Get Outside',
    img: 'getoutside.png',
    content:
      'A Vanilla Javascript Web app used to pinpoint interesting locations near you to walk or run to. The Google Maps API, Google Nearby Search API, and HTML Geolocation are used in collaboration to create this app.',
    github: 'https://github.com/nolbuzanis/Get-Outside',
    link: 'https://nolbuzanis.github.io/Get-Outside/'
  },
  {
    title: 'Spackler Guitar Pedal',
    img: 'spackler-dramatic.jpg',
    content:
      'A mid-range volume boost with the goal of adding "warmth" or "depth" to a guitar signal. It is not my original design, but I chose to build it to learn the fundamentals of PCB design using EagleCAD and improve my soldering and wiring of electronics.',
    github: null,
    link: null
  }
];

const particleParams = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#fcf3e2'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 150,
        size: 15,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: '#b61924',
    background_image: '',
    background_position: '50% 50%',
    background_repeat: 'no-repeat',
    background_size: 'cover'
  }
};

export default App;
