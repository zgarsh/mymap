import React from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';

import styled from 'styled-components';


// for some reason styled components aren't working on this one. Doing inline css as suggested here: https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b
// const categoryStyle = {
//     position: 'relative',
//     float: 'right',
//     margin: '5px',
//     padding: '3px 10px',
//     borderRadius: '10px',
//     backgroundColor: 'rgb(230, 230, 230, 0.5)',
//     zIndex: 2,
//     // width: '5rem',
//     height: '40px',
//     textAlign: 'center',
//     fontSize: 20,
//   }

const CategoryStyle = styled.div`
    position: relative;
    float: right;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 10px;
    background: rgb(230, 230, 230, 0.7);
    z-index: 2;
    height: 35px;
    text-align: center;
    font-size: 20;

    :hover {
        background: rgb(105, 182, 223, 0.6);
    }
`;

  


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
        <CategoryStyle>
            {this.props.category}
        </CategoryStyle>
  );
  }
}

export default CategoryCard;
