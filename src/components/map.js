import React from 'react'
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl'
import mapData from './data.json'



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

    map.on('load', function() {
      map.addLayer({
        id: 'favSpots',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: mapData
        },
        layout: {
          'icon-image': 'hospital-15',
        },
        paint: {
          'icon-color': 'red'
        }
      });
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
        <div ref={el => this.mapContainer = el} style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          }} />
      </StyledMap>
    );
  }
}

export default Map;
