import React from 'react';
import ContactList from './ContactList';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <div className='header-content'>
            <h1>Nolan Buzanis</h1>
            <span>Engineer | Entrepreneur</span>
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
