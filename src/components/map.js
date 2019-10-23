import React from 'react'
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl'

import mapData from './data.json'
import TileList from './tilelist'
import CategoryList from './listcategories'

import 'mapbox-gl/dist/mapbox-gl.css'
import AboutMe from './aboutmecategory.js';



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
      visibleMarkers: [],
    };
    this.map = null;
    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  //// if you mess it up below, put this back
  // onCategoryClick = (category) =>{
  //   let updatedCategories = this.state.activeCategories;
  //   updatedCategories[category] = !updatedCategories[category];
  //   this.setState({activeCategories:updatedCategories});
  //   this.clearMapMarkers(this.map);
  //   this.loadMapMarkers(this.map);
  // }


  onCategoryClick = (category) =>{
    
    // if about me was not previously selected
    if (!this.state.activeCategories['about me']){
      if (category === 'about me'){
        // if about me was not previously selected and is now selected
        // console.log('setting only about me to be active')
        this.setState({activeCategories:{'about me': true}})
      } else {
        // if about me was not previously selected and is not now selected
        // console.log('modifying categories other than about me')
        let updatedCategories = this.state.activeCategories;
        updatedCategories[category] = !updatedCategories[category];
        this.setState({activeCategories:updatedCategories});
      }
    } else if (this.state.activeCategories['about me']) {
      // if about me was previously selected
      // if about me was previously selected and is clicked again
      if (category === 'about me'){
        // console.log('setting active categories to none')
        this.setState({activeCategories:{}})
      } else {
        // if about me was previously selected and something else is clicked
        // console.log('setting something other than about me to true')
        this.setState({activeCategories:{[category]: true}})
      }
    } else {
      console.log('something went wrong!')
    }

    this.clearMapMarkers(this.map);
    // console.log('cleared map markers')
    
    this.loadMapMarkers(this.map);
    // console.log('loaded map markers');
  }


  clearMapMarkers = (map) =>{
    // map.removeLayer('1');
    // map.removeLayer(el);
    // map.marker.remove();

    var currentMarkers = document.getElementsByClassName('marker');
    // console.log(currentMarkers);
    var currentMarkersLength = currentMarkers.length;
    for (let i=0; i<currentMarkersLength; i++){
        // console.log('removing ', currentMarkers[i]);
        currentMarkers[0].remove();

    // this.loadMapMarkers(this.map);
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

  loadMapMarkers = (map) => {
    // after the map component is mounted, add points to it


    // map.removeLayer(1);

    let filteredLocations = mapData.features.filter((item) => {
      // console.log(item, this.state.activeCategories[item.properties.category])
      return this.state.activeCategories[item.properties.category]// === true

      // TODO: Why does this evaluate to true for 'about me' when it's not in the state?

    })

    console.log('about me status:', this.state.activeCategories['about me'])

    // console.log(filteredLocations)

    filteredLocations.forEach(function(marker) {

      // create a DOM element for the marker - these are the divs which house each emoji marker
      var el = document.createElement('div');
      
      el.innerHTML += marker.properties.emoji;
      el.style.fontSize = 'x-large';
      el.id = marker.id;
      el.className = 'marker';
      el.coordinates = marker.geometry.coordinates;
      el.title = marker.properties.name;

      el.addEventListener('click', function() {
        map.flyTo({center: marker._lngLat, zoom: 17})
      });

      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });
      
      el.addEventListener('mouseenter', function() {
        // TODO: might be cool to zoom in a bit

        // TODO: move popup out of the way
        
        popup.setLngLat(marker._lngLat)
          .setHTML(el.title)
          .addTo(map);

        // console.log(marker)
      });

      el.addEventListener('mouseleave', function() {
        // TODO: might be cool to zoom out a bit
        popup.remove();
      });


      
      var marker = new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
      
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





      /////////
      function intersectRect(r1, r2) {
        return !(r2.left > r1.right ||
          r2.right < r1.left ||
          r2.top > r1.bottom ||
          r2.bottom < r1.top);
      }
      
      function getVisibleMarkers() {
        var cc = map.getContainer();
        var els = cc.getElementsByClassName('marker');
        var ccRect = cc.getBoundingClientRect();
        var visibles = [];
        for (var i = 0; i < els.length; i++) {
          var el = els.item(i);
          var elRect = el.getBoundingClientRect();
          intersectRect(ccRect, elRect) && visibles.push(parseInt(el.id));
        }
        // if (visibles.length > 0) console.log(visibles);

        return visibles
      }
      /////////////

      this.setState({visibleMarkers: getVisibleMarkers()});

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
        visibleMarkers={this.state.visibleMarkers}
      />
      <CategoryList
        activeCategories={this.state.activeCategories}
        onCategoryClick={this.onCategoryClick}
      />
      <AboutMe
        activeCategories={this.state.activeCategories}
        onCategoryClick={this.onCategoryClick}   
      />
      </div>
    );
  }
}

export default Map;
