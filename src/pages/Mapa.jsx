import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../styles/mapa.css'

const Mapa = () => {

    const [state, setstate] = useState({
        longitude: 0,
        latitude: 0
    })

    useEffect(() => {
        handleUbicacion()
    }, [])
    const handleUbicacion = () => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setstate({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            }
        )
    }
    return (
        <div>
            <button onClick={handleUbicacion}> Actualizar su ubicacion </button>

            <div id="mapContainer">
                <MapContainer center={[6.167, -75.333]} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[state.latitude, state.longitude]}>
                        <Popup>
                            Tu ubicacion
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Mapa;