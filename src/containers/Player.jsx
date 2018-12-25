import React from 'react';
import Player from '../components/Player'

class PlayerContainer extends React.Component {
    refCallback = element => {
        let height = null;
        const dimensions = element.getBoundingClientRect()
        if(element && typeof dimensions === "object" && dimensions.height) {
            height = dimensions.height
            if(dimensions.height)this.props.getHeight((JSON.stringify(height) + "px"))
        }
      };

    render(){
        return (
            <div ref={this.refCallback} className="stream-wrapper content">
                <Player>
                </Player>
            </div>
        )
    }
    // componentDidMount() {
    //     if(!this.props.isMobile){
    //         window.addEventListener("resize", this.refCallback);
    //     }
    // }
    // componentWillUnmount() {
    //     if(!this.props.isMobile){
    //         window.addEventListener("resize", this.refCallback);
    //     }
    // }
};

export default PlayerContainer;