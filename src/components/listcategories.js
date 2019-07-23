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


// this.state.stateList = {
// drink:true,
// eat:true,
// play:true,
// work:true,
// outdoors:true,
// }
//in parent w/state list
// handleClick = (category)=>{
//   this.state.stateList[category] = !this.state.stateList[category]
// this.setState({/*update stateList here*/})

}

class CategoryList extends React.Component{

  render(){
    return(
        <ListStyle>
        <div>
            <CategoryCard category={'drink'} handleClick={this.props.handleClick} />
{/* <div onClick={this.props.handleClick(this.props.category)}> ...</div> */}
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