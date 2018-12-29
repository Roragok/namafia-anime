import React from 'react';
import Toggle from 'react-toggle'
import styled from 'styled-components';

const Container = styled.div`
padding: 2px 3px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
max-height: 20px;
display: flex;
flex-direction:row;
justify-content:space-between;
width:inherit;
margin: 0 auto;
background: #3e3e3e;`

const ButtonGroup = styled.label`
opacity: 0.5;&:hover{opacity:1;}
display: flex;`

const ButtonLabel = styled.span`
vertical-align: top;
margin: 1px 6px;`

const Options = styled.div`
display: flex;
align-self:flex-end;`

const Info= styled.div`
align-self: flex-start;
display: flex;
@media (max-width: 480px) {
  display: none;
}
opacity: 0.5;&:hover{opacity:1;}
`

class NavbarContainer extends React.Component {

    render(){
        return (
          <Container>
            <Info>NAMafiA Stream App
            </Info>
            <Options>
              <ButtonGroup>
                <ButtonLabel>Show Chat</ButtonLabel>
                <Toggle 
                  defaultChecked={this.props.visibleChat}
                  onChange={(e) => this.props.toggleChatVisibility(e.target.checked)}
                />
              </ButtonGroup></Options>
            </Container>
        )
    }
};

export default NavbarContainer;