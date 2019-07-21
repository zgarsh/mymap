import React from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';


// for some reason styled components aren't working on this one. Doing inline css as suggested here: https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b
const categoryStyle = {
    position: 'relative',
    float: 'right',
    margin: '5px',
    padding: '3px 10px',
    borderRadius: '10px',
    backgroundColor: 'rgb(230, 230, 230, 0.5)',
    zIndex: 2,
    // width: '5rem',
    height: '40px',
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
