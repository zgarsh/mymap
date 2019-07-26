import React from 'react'
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl'

import mapData from './data.json'
import Tile from './tile'
import CategoryCard from './category'
import CategoryList from './listcategories'
import { removeProperties } from '@babel/types';

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
    let updatedCategories
    updatedCategories = this.state.activeCategories
    updatedCategories[category] = !updatedCategories[category]
  //   // this.state.activeCategories[category] = !this.state.activeCategories[category]
  //   // this.state.activeCategories[category] = !this.state.activeCategories[category]
  //   // activeCategories = updatedCategories
  //   // this.setState(this.state.activeCategories = this.state.activeCategories)
  //   // this.state.activeCategories[category] = !this.state.activeCategories[category]
    this.setState({activeCategories:updatedCategories})
  }

  //   // this.setState(prevState => ({
  //   //   activeCategories[category]: !prevState.activeCategories[category]
  //   // }));

  // }



  // onCategoryClick(category){
  //   this.state.activeCategories[category] = !this.state.activeCategories[category]
  //   this.setState({activeCategories: ['I have been clicked!']})
  // }








  // componentDidMount() is a react function that is called immediately after the render function. 'mounting' means inserting a component into the tree
  // note: if you need to get data from a remote endpoint, this is the place to do it!
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
      el.style.backgroundColor = 'rgb(230, 230, 230, 0.6)';
      el.style.border = '1px solid black';
      el.style.borderRadius = '5px';
      el.style.padding = '5px';
       
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


    
    // function flyToHiTops () {
    //   map.flyTo({
    //     center: [-122.431822, 37.764998],
    //     zoom: 15
    //   })
    // }

  }

  

  flyToHiTops = () => {
    this.map.flyTo({
          center: [-122.431822, 37.764998],
          zoom: 15
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
      {mapData.features.map( (item, index) => (
        <Tile 
          title={item.properties.name}
          emoji={item.properties.emoji}
          text={item.properties.description}
          key={item.id}
          flyToHiTops={this.flyToHiTops.bind(this)}
        />
      ))}
      <CategoryList
        activeCategories={this.state.activeCategories}
        onClicked={this.onCategoryClick}
      />
      </div>
    );
  }
}

export default Map;
