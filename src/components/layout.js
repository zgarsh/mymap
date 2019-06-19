import React from 'react';

import Menu from './menu';
import Tile from './tile';
import Map from './map';

import './layout.css'


class Layout extends React.Component {

  render() {
    const text = "this is a location that I am quite fond of for various reasons! I would recommend it to people who like similar things."

    return (
      <div>
        <Menu />
        <Tile title="potato" text={text} />
        <Tile title="salad" text={text} />
        <Tile title="abigail" text={text} />
        <Tile title="potato" text={text} />
        <Tile title="salad" text={text} />
        <Tile title="abigail" text={text} />
        <Map />
      </div>
    )
  };
}

export default Layout;
