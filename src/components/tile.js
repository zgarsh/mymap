import React from 'react';
import styled from 'styled-components';
import {Button, Card} from 'react-bootstrap';

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
  render(){
    return(
        <Card style={tileStyle}>
          <Card.Body>
            <Card.Title><a href="#">{this.props.title}  {this.props.emoji}</a></Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
          </Card.Body>
        </Card>
  );
  }
}

export default Tile;
