import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Footer_maps = () => {
    const position = [19.241416, 72.867835]; // Example coordinates for the map center

    const customIcon = L.icon({
        iconUrl: '/img/location.png', // Path to your custom icon image
        iconSize: [38, 38], // Size of the icon
        iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -38] // Point from which the popup should open relative to the iconAnchor
    });

    return (
        <MapContainer center={position} zoom={130} style={{ height: "317px", width: "625px" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                Ashok Van, Shiv Vallabh Road,<br /> Dahisar East, Mumbai-400 068 .
                </Popup>
            </Marker>
        </MapContainer>
    );
};
 export default Footer_maps;