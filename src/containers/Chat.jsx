import React from 'react';
// import { CSSTransition } from 'react-transition-group'
import Chat from '../components/Chat'
import classNames from 'classnames'

class ChatContainer extends React.Component {
    render(){
      let chatClasses = classNames('chat-wrapper iframe-wrapper', {hidden: this.props.hidden})
      return(
            <div className={chatClasses}>
              <Chat
              height={this.props.height} />
            </div>
      )  
    }
};

export default ChatContainer;