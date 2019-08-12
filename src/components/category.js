import React from 'react';

import styled from 'styled-components';


// let colorStatus = {{this.props.isActive}}

const CategoryStyle = styled.div`
  position: relative;
  float: right;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 10px;
  /* background: rgb(230, 230, 230, 0.7); */
  z-index: 2;
  height: 35px;
  text-align: center;
  font-size: 20;

  :hover {
      cursor: pointer;
  }

  background-color: ${(props) =>  props.isActive ? "rgb(76, 166, 70, 0.7)" : "rgb(230, 230, 230, 0.7)"};

`;


class CategoryCard extends React.Component{
  constructor(props){
    super(props);

    // this.state = {
    //   activeCategories: this.props.activeCategories,
    // };

    // This bind is necessary to make `this` work in the callback in handleClick()
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   // console.log(this)
  //   // console.log('click! from category')

  //   this.setState(state => ({
  //     isActive: !state.isActive
  //   }));
  // }

  render(){


    
    return(
        <CategoryStyle
          isActive={this.props.isActive}
          onClick={()=>this.props.onCategoryClick(this.props.category)}
        >
            {this.props.category}
            {/* {JSON.stringify(this.props.isActive)} */}
        </CategoryStyle>
  );
  }
}

export default CategoryCard;
