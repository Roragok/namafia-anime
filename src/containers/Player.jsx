import React from 'react';
import Player from '../components/Player'
import Measure from 'react-measure'

class PlayerContainer extends React.Component {
    render(){
        const setHeight = this.props.setHeight
        return (
            <Measure
            bounds
            onResize={contentRect => {
              setHeight(contentRect.bounds.height)
            }}>
                {({ measureRef }) => (
                <div ref={measureRef} className="stream-wrapper iframe-wrapper">
                    <Player>
                    </Player>
                </div>)}
            </Measure>
        )
    }
};

export default PlayerContainer;