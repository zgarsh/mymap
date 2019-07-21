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


class CategoryList extends React.Component{

  render(){
    return(
        <ListStyle>
        <div>
            <CategoryCard category={'drink'} />
            <CategoryCard category={'eat'} />
            <CategoryCard category={'play'} />
            <CategoryCard category={'work'} />
            <CategoryCard category={'outdoors'} />
        </div>
        </ListStyle>
  );
  }
}

export default CategoryList;