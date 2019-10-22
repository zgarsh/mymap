import React from 'react';

import Tile from './tile.js';

import mapData from './data.json';


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

    
    let filteredLocations = mapData.features.filter((item) => {
        return this.props.categories[item.properties.category] === true && this.props.visibleMarkers.includes(item.id)
    })

    // let filteredLocations = mapData.features

    return(
        <div>
        {filteredLocations.map( (item, index) => (
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