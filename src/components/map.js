import React from 'react'
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl'

import mapData from './data.json'
import TileList from './tilelist'
import CategoryList from './listcategories'

import 'mapbox-gl/dist/mapbox-gl.css'



// publicly available token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const StyledMap = styled.div`
  z-index: 1;
`

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: -122.4397,
      lat: 37.7626,
      zoom: 10,
      activeCategories: {
        play: false,
        eat: false,
        drink: false,
        outdoors: false,
        work: false,
      },
    };
    this.map = null;
    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  onCategoryClick = (category) =>{
    let updatedCategories = this.state.activeCategories;
    updatedCategories[category] = !updatedCategories[category];
    this.setState({activeCategories:updatedCategories});

    // console.log('click! (from map.js)')
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });

    this.map = map;

    //// ADDING FAV SPOTS ////
    // after the map component is mounted, we want to add points to it
    mapData.features.forEach(function(marker) {
      // create a DOM element for the marker - these are the divs which house each emoji marker
      var el = document.createElement('div');
      
      // el.className = 'mark';
      el.innerHTML += marker.properties.emoji;
      el.style.fontSize = 'x-large';
      el.id = marker.id;
      // el.style.backgroundColor = 'rgb(230, 230, 230, 0.6)';
      // el.style.border = '1px solid black';
      // el.style.borderRadius = '5px';
      // el.style.padding = '5px';
       
      // el.addEventListener('click', function() {
      // window.alert('nothing to see here');
      // });
       
      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
      });


    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  

  // flyToHiTops = () => {
  //   this.map.flyTo({
  //         center: [-122.431822, 37.764998],
  //         zoom: 17
  //       })
  // }

  flyToLocation = (location) => {
    this.map.flyTo({
      center: location,
      zoom: 17
    })
  }

  
  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
      <StyledMap>
        <div ref={el => this.mapContainer = el} style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          }} />
      </StyledMap>
      {/* {mapData.features.map( (item, index) => (
        <Tile 
          title={item.properties.name}
          emoji={item.properties.emoji}
          secondaryEmoji={item.properties.secondaryEmoji}
          text={item.properties.description}
          key={item.id}
          coordinates={item.geometry.coordinates}
          flyToLocation={this.flyToLocation.bind(this)}
        />
      ))} */}
      <TileList 
        flyToLocation={this.flyToLocation.bind(this)}
      />
      <CategoryList
        activeCategories={this.state.activeCategories}
        onCategoryClick={this.onCategoryClick}
      />
      </div>
    );
  }
}

export default Map;
