import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

function MapComponent() {

  const locations = [
    {position: [28.100618890404768, -15.443186893408493], title: "Lidl", description: "Lidl, Carretera del Norte, Las Palmas de Gran Canaria"},
    {position: [28.10084997465951, -15.442166993408302], title: "Aldi", description: "Aldi, Carretera del Norte, Las Palmas de Gran Canaria"},
    {position: [28.10223170664317, -15.44273444738366], title: "Carrefour", description: "Carrefour, Centro Comercial La Ballena,Carretera del Norte, Las Palmas de Gran Canaria"},
    {position: [28.097548597227032, -15.442636285457674], title: "Mercadona", description: "Mercadona, Miller Bajo, Las Palmas de Gran Canaria"},
    {position: [28.093362647469657, -15.443430397398116], title: "Hiperdino", description: "Hiperdino, Casa Blanca III, Las Palmas de Gran Canaria"}
  ];

  return (
    <MapContainer center={[28.100618890404768, -15.443186893408493]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup>
            <div>
              <h2>{location.title}</h2>
              <p>{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
        

export default MapComponent;
