import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import './Leaflet.css'

export default class Leaflet extends Component {

  state = {
    location: {
      lat: 45.5127,
      lng: -122.6795,
    },
    zoom: 13
  }

  render(){
    const position = [this.state.location.lat, this.state.location.lng];
    return (
        <Map className="map" center={position} zoom={this.state.zoom} >
          <TileLayer
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      />
       </Map>
    )
  }

}