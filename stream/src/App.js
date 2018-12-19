import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="stream-container container">
        <div class="stream-wrapper">
          <div class="stream">
            <iframe
              lang="en"
              title="Anime Player"
              src="https://stream.namafia.com/player.html"
              name="Anime Player"
              width="1280"
              height="720"
              scrolling="no"
              frameborder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowfullscreen="true">
            </iframe>
          </div>
        </div>
        <div class="chat-wrapper">
          <div class="chat">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
