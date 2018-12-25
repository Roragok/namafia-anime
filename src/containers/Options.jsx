import React from 'react';
import ToggleButton from '../components/ToggleButton'

const ButtonGroup = (props) => (
  <div className="button-group">
    {props.children}
  </div>
)

class OptionsContainer extends React.Component {

    render(){
        return (
            <div className="options-bar">
              <ButtonGroup>
                <ToggleButton
                  visible={this.props.visible}
                  toggle={(visible) => this.props.toggleVisibility(visible)}
                />
              </ButtonGroup>
            </div>
        )
    }
};

export default OptionsContainer;