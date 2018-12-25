import React, { Component } from 'react';
import PlayerContainer from './containers/Player';
import ChatContainer from './containers/Chat';
import OptionsBar from './containers/Options'
import {isMobile} from 'react-device-detect';

class App extends Component {

  state = {
    hideChat: false,
  }

  render() {
    return (
      <div className="app-wrapper">
        <OptionsBar
          visible={!this.state.hideChat}
          toggleVisibility={hideChat => this.setState({ hideChat })}
        />
        <div className="container">
          <PlayerContainer isMobile getHeight={height => this.setState({ height })}/>
          <ChatContainer
            hidden = {this.state.hideChat}
            height={isMobile ? "350px" : this.state.height}/>
        </div>
      </div>
    );
  }
}

export default App;
