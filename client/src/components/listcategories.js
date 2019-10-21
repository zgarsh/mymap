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

const categories = ['drink', 'eat', 'play', 'work', 'outdoors', 'visit']

class CategoryList extends React.Component{

  handleClick() {
    console.log('helloooooo')
  }

  render(){
      var thisCategory = this.props.category
    return(
        <ListStyle>
          <div>
            {categories.map( (item, index) => (
              <CategoryCard 
                key={index}
                category={item}
                // onClick={(thisCategory)=> this.props.onClicked(thisCategory)}
                // onClick={()=>{console.log('click??')}}
                // onClick={(e) => this.handleClick(e)}
                onCategoryClick={this.props.onCategoryClick}
                isActive={this.props.activeCategories[item]}
              />
            ))}
          </div>
        </ListStyle>
  );
  }
}

export default CategoryList;