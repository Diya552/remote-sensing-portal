import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './MapViewer.css';

const MapViewer = () => {
  const [center] = useState([20, 0]);
  const [zoom] = useState(3);

  return (
    <div className="map-viewer">
      <h1>Remote Sensing Portal - Map Viewer</h1>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            Remote Sensing Portal<br />
            Select an area to analyze satellite imagery
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapViewer;
