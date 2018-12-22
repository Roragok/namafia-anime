import React from 'react';
import ReactIframeResizer from 'react-iframe-resizer-super';
import { black } from 'ansi-colors';


const iframeOptions = {
    checkOrigin: false,
    log: true,
    bodyBackground: black,
}

const Player = ({options}) => {
    return (
        <div class="aspect-ratio">
            <ReactIframeResizer
                iframeResizerOptions={iframeOptions}
                src="https://stream.namafia.com/player.html"
                id="player_embed"
            />
        </div>
    )
}

export default Player;