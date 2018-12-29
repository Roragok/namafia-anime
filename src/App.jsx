import React, { Component } from 'react';
import PlayerContainer from './containers/Player';
import ChatContainer from './containers/Chat';
import Navbar from './containers/Navbar'


class App extends Component {

  state = {
    showChat: true,
  }

  render() {
    return (
      <div className="app-wrapper">
        <Navbar
          visibleChat={this.state.showChat}
          toggleChatVisibility={showChat => this.setState({ showChat })}
        />
        <div className="container">
          <PlayerContainer
            setHeight={height => this.setState({ height })}
           />
          <ChatContainer
            hidden={!this.state.showChat}
            height={window.innerWidth < 820 ? "300px" : this.state.height}/>
        </div>
      </div>
    );
  }
}

export default App;

