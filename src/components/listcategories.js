import React from 'react';

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
      var thisCategory = this.props.category
    return(
        <ListStyle>
        <div>
        {categories.map( (item, index) => (
        <CategoryCard 
          category={item}
          onClick={(thisCategory)=> this.props.onClicked(thisCategory)}
        />
      ))}
        <CategoryCard category={JSON.stringify(this.props.activeCategories)} />
        </div>
        </ListStyle>
  );
  }
}

export default CategoryList;