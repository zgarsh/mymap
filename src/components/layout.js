import React from 'react';

import Menu from './menu';
import Tile from './tile';
import Map from './map';

import './layout.css'


class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Tile title="potato"/>
        <Tile title="salad"/>
        <Tile title="abigail"/>
        <Tile title="potato"/>
        <Tile title="salad"/>
        <Tile title="abigail"/>
        <Map />
      </div>
    )
  };
}

export default Layout;
