import React from 'react';
import Iframe from 'react-iframe';




const Player = (props, ref) => {
    return (
        <div className="aspect-ratio">
            <Iframe
                url="https://stream.namafia.com/player.html"
                height="100%"
                id="player-embed"
                className="restreamer-player"
                allowFullScreen
            />
        </div>
    )
}

export default Player;
