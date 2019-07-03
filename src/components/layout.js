import React from 'react';

import Tile from './tile';
import Map from './map';
import mapData from './data.json';



class Layout extends React.Component {

  render() {
    const text = "this is a location that I am quite fond of for various reasons! I would recommend it to people who like similar things."

    return (
      <div>
        <Map />
        {mapData.features.map( (item, index) => (
          <Tile title={item.properties.name} emoji={item.properties.emoji} text={item.properties.description} key={item.id}/>
        ))}
      </div>
    )
  };
}

export default Layout;
