import React from 'react';
import styled from 'styled-components';

import Menu from './menu';
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
        {/*<Tile title="Last Rites 💀🍹🔥" text={text} />
        <Tile title="Hi Tops 🏳️‍🌈🏅🍺" text={text} />
        <Tile title="Butter 🥤🚜🥫" text={text} />
        <Tile title="Wilkommen 🇩🇪🍻🌿" text={text} />
        <Tile title="The Willows 🥃🍔🍺" text={text} />
        <Tile title="Flick's" text={text} />
        <Tile title="Amigo room" text={text} />
        <Tile title="" text={text} />
        <Tile title="" text={text} />
        */}
      </div>
    )
  };
}

export default Layout;
