import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



function LocationMarker({position, setPosition}) {

  function Location() {
   const map = useMap();

   useEffect(() => {
     if (position) {
       map.flyTo(position, map.getZoom());
     }
   }, [position]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You clicked here</Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100%", zIndex:'' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Location />
    </MapContainer>
  );
}

export default LocationMarker;
