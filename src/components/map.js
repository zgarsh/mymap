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
let filteredLocations = []

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
    this.clearMapMarkers(this.map);
    this.loadMapMarkers(this.map);
  }

  clearMapMarkers = (map) =>{
    // map.removeLayer('1');
    // map.removeLayer(el);
    // map.marker.remove();

    var currentMarkers = document.getElementsByClassName('marker');
    for (let i=0; i<currentMarkers.length; i++){
      currentMarkers[i].remove()
    }



    // console.log(currentMarkers);
    // // const currentMarkersArray = Array.from(currentMarkers);

    // console.log(currentMarkers.length)

    // var currentMarkersArray = []

    // for (let i=0; i < 9; i++){
    //   currentMarkersArray.push('yoohooo')
    // }

    // console.log(currentMarkersArray);


    // currentMarkers.forEach((marker) => {
    //   marker.remove();
    // })

  }

  loadMapMarkers = (map) =>{
        //// ADDING FAV SPOTS ////
    // after the map component is mounted, we want to add points to it

    // var marker;
    // map.removeLayer(el);
    // map.eachLayer(function (layer) {
    //   map.removeLayer(layer);
    // });

    // for (let i = 0; i < map.getStyle().layers.length; i++) {
    //   console.log(i)
    // }

    // map.removeLayer(1);

    let filteredLocations = mapData.features.filter((item) => {
      return this.state.activeCategories[item.properties.category] === true
    })

    filteredLocations.forEach(function(marker) {

      // create a DOM element for the marker - these are the divs which house each emoji marker
      var el = document.createElement('div');
      
      el.innerHTML += marker.properties.emoji;
      el.style.fontSize = 'x-large';
      el.id = marker.id;
      el.className = 'marker';
      
      // el.addEventListener('click', function() {
      // window.alert('nothing to see here');
      // });
      
      var marker = new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

      
    });
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
    // this is necessary to make 'map' available in the .flyto function


    this.loadMapMarkers(map)


    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }


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
      <TileList 
        flyToLocation={this.flyToLocation.bind(this)}
        categories={this.state.activeCategories}
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
