import React from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';



const categoryStyle = {
    position: 'absolute',
    margin: '10px',
    paddingTop: '3px',
    borderRadius: '30px',
    backgroundColor: 'rgb(230, 230, 230, 0.5)',
    zIndex: 2,
    width: '10rem',
    height: '40px',
    // width: '100px',
    right: '0px',
    top: '0px',
    textAlign: 'center',
    fontSize: 20,
  }


class CategoryCard extends React.Component{
  constructor(props){
    super(props);
    this.state = { isActive: false};

    // This binding is necessary to make `this` work in the callback in handleClick()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this)

    this.setState(state => ({
      isActive: !state.isActive
    }));
  }

  render(){
    return(
        <Card style={categoryStyle}>
            {this.props.category}
        </Card>
  );
  }
}

export default CategoryCard;
