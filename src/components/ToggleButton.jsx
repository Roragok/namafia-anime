import React from 'react';
import ToggleButton from 'react-toggle-button'

// Different labels example...

// 'inactiveLabel' - a string or component to display when OFF.
// 'activeLabel' - a string or component to display when ON.



class TheToggleButton extends React.Component {
  state = { value: this.props.visible }
  render(){
    return (
<ToggleButton
  value={ this.state.value }
  onToggle={(value) => {
    this.setState({
      value: !value,
    })
    this.props.toggle(this.state.value)
  }} />
    )
      }
}

export default TheToggleButton;