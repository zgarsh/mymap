import React from 'react';
import styled from 'styled-components';
import {Button, Card} from 'react-bootstrap';


import map from './map';

// import Style from './layout'

const tileStyle = {
  position: 'sticky',
  margin: '10px',
  borderRadius: '3px',
  backgroundColor: 'rgb(230, 230, 230, 0.5)',
  zIndex: 2,
  width: '20rem',
}


class Tile extends React.Component{
  constructor(props){
    super(props);
    this.state = { isActive: false};

    // This binding is necessary to make `this` work in the callback in handleClick()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    // console.log('click!')

    this.props.flyToHiTops();

    this.setState(state => ({
      isActive: !state.isActive
    }));
  }

  render(){
    return(
        <Card style={tileStyle} onClick={this.handleClick}>
          <Card.Body>
            <Card.Title><a href="#">{this.props.title}  {this.props.emoji}</a></Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
          </Card.Body>
        </Card>
  );
  }
}

export default Tile;
