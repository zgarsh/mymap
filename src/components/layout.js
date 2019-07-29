import React from 'react';

import Map from './map';



class Layout extends React.Component {

  render() {

    return (
      <div>
        <Map />
        {/* {mapData.features.map( (item, index) => (
          <Tile 
            title={item.properties.name}
            emoji={item.properties.emoji}
            text={item.properties.description}
            key={item.id}
            flyToHiTops={this.flyToHiTops}
          />
        ))} */}
      </div>
    )
  };
}

export default Layout;
