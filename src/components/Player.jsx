import React from 'react';
import Iframe from 'react-iframe';




const Player = (props, ref) => {
    return (
        <div className="aspect-ratio">
            <Iframe
                url="https://stream.namafia.com/ed45857f-9b70-4519-87ba-b3c8797d5aa9.html"
                height="100%"
                id="player-embed"
                className="restreamer-player"
                allowFullScreen
            />
        </div>
    )
}

export default Player;
