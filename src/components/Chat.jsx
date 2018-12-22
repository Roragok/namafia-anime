import React from 'react';
import ReactIframeResizer from 'react-iframe-resizer-super';

const iframeOptions = {
    checkOrigin: false,
    log: true,
    heightCalculationMethod: 'bodyScroll',
}

const Chat = ({options}) => {

    return (
        <ReactIframeResizer
            iframeResizerOptions={iframeOptions}
            iframeResizerEnable="true"
            src="https://www.twitch.tv/embed/roragok/chat"
            id="chat_embed"
        />
    )
};

export default Chat;