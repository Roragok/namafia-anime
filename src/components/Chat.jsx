import React from 'react';
import Iframe from 'react-iframe'

const Chat = ({height, visible, children}) => {

    return (
        <Iframe
            url="https://www.twitch.tv/embed/roragok/chat"
            id="chat_embed"
            display="flex-inline"
            position="relative"
            height={height + "px"}
        />
    )
};

export default Chat;