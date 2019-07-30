import React from 'react';

import Tile from './tile.js';

import mapData from './data.json';

const tileListStyle = {
  position: 'sticky',
  margin: '10px',
  borderRadius: '3px',
  backgroundColor: 'rgb(230, 230, 230, 0.5)',
  zIndex: 2,
  width: '20rem',
}


class TileList extends React.Component{
  constructor(props){
    super(props);
  }

//   handleClick(){
//     console.log(this)

//     // this.props.flyToHiTops();

//     this.props.flyToLocation(this.props.coordinates)

//     this.setState(state => ({
//       isActive: !state.isActive
//     }));
//   }

  render(){
    return(
        <div>
        {mapData.features.map( (item, index) => (
            <Tile 
              title={item.properties.name}
              emoji={item.properties.emoji}
              secondaryEmoji={item.properties.secondaryEmoji}
              text={item.properties.description}
              key={item.id}
              coordinates={item.geometry.coordinates}
              flyToLocation={this.props.flyToLocation}
            />
          ))}
        </div>
  );
  }
}

export default TileList;