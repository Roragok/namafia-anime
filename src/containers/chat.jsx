import React from 'react';
// import { CSSTransition } from 'react-transition-group'
import Chat from '../components/Chat'

class ChatContainer extends React.Component {

    state = {
      height: this.props.height,
      visible: !this.props.hidden,
    }



    render(){
      return(
            <div className="chat-wrapper content">
              <Chat
              height={this.state.height || this.props.height} />
            </div>
      )  
    }
};

export default ChatContainer;