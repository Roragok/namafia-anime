import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Player from './components/Player';
import Chat from './components/Chat';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="stream-wrapper content">
          <Player stream-actions="" />
        </div>
        <div className="chat-wrapper content">
          <Chat/>
        </div>
      </div>
    );
  }
}

export default App;
