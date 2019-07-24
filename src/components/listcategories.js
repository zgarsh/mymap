import React from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';

import styled from 'styled-components';

import CategoryCard from './category.js'

const ListStyle = styled.div`
  margin: 40px;
  position: fixed;
  top: -20px;
  right: -20px;
  width: 12em;
`;

const categories = ['drink', 'eat', 'play', 'work', 'outdoors', 'events']

class CategoryList extends React.Component{

  render(){
      console.log(this.props)
    return(
        <ListStyle>
        <div>{/* onClick={this.props.onClicked} */}
        {categories.map( (item, index) => (
        <CategoryCard 
          category={item}
          onClick={this.props.onClicked}
        />
      ))}
        </div>
        </ListStyle>
  );
  }
}

export default CategoryList;