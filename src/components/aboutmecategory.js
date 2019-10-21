import React from 'react';

import styled from 'styled-components';

import CategoryCard from './category.js'

const ListStyle = styled.div`
  margin: 40px;
  position: fixed;
  bottom: -15px;
  right: -30px;
  width: 12em;
`;

const categories = ['about me']

class AboutMe extends React.Component{

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

export default AboutMe;