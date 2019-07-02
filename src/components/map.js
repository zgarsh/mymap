import React from 'react'
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl'



// publicly available token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const StyledMap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  z-index: 1;
`

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: -122.4397,
      lat: 37.7626,
      zoom: 10
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
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

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <StyledMap>
        <div ref={el => this.mapContainer = el}>
        </div>
      </StyledMap>
    );
  }
}

export default Map;
