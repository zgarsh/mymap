import React from 'react';
import styled from 'styled-components';
import {Button, Card} from 'react-bootstrap';

// import Style from './layout'

const StyledTile = styled.div`
  position: sticky;
  margin: 10px;
  border-color: blue;
  border-radius: 30px !important;
  // background-color: rgb(230, 230, 230, 0.5);
  // z-index: 2;
  width: 20rem;
`


class Tile extends React.Component{
  render(){
    return(
      <StyledTile>
        <Card>
          <Card.Body>
            <Card.Title><a href="#">{this.props.title}  {this.props.emoji}</a></Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
          </Card.Body>
        </Card>
      </StyledTile>
  );
  }
}

export default Tile;
