import React from 'react';
import Iframe from 'react-iframe';
import { black } from 'ansi-colors';




const Player = (props, ref) => {
    return (
        <div className="aspect-ratio">
            <Iframe
                url="https://stream.namafia.com/player.html"
                height="100%"
                id="player-embed"
                name="restreamer-player"
                scrolling="no"
                frameborder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowfullscreen="true"
            />
        </div>
    )
}

export default Player;
