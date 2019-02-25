import React from 'react';
import ContactList from './ContactList';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
