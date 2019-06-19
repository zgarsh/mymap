import React from 'react';
import {Button, Card} from 'react-bootstrap';


class Tile extends React.Component{
  render(){
    return(
      <Card className="Card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" size="sm">Go</Button>
        </Card.Body>
      </Card>
  );
  }
}

export default Tile;
