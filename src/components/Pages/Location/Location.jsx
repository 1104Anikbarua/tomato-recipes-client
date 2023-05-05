import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import locationIcon from '../../../assets/icon/location.png'
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Location = () => {

    const customIcon = new icon({
        iconUrl: locationIcon,
        iconSize: [30, 30]
    })

    const markers = [
        {
            geocode: [19.1556, 72.8850],
            popup: "Tomato"
        },
    ];

    return (
        <div
            style={{ position: 'relative', zIndex: '1' }}
        >
            <PageTitle titles={'Map'}></PageTitle>
            <MapContainer
                center={[19.0760, 72.8777]}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: '400px', width: '100%', maxWidth: "400px", margin: '160px auto 80px auto', }}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></TileLayer>
                {
                    markers.map((marker, index) => <Marker
                        key={index}
                        position={marker.geocode}
                        icon={customIcon}

                    >
                        <Popup>{marker.popup}</Popup>
                    </Marker>)
                }
            </MapContainer>
        </div>
    );
};

export default Location;