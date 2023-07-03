import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import DefaultIcon from "../icons/location.png";
import restaurant from "../icons/restaurant.png";
import PopupDetails from "./PopupDetails";
import Search from "../Header/Search";

// Create a custom icon
const locationIcon = new Icon({
  iconUrl: DefaultIcon,
  iconSize: [25, 41],
  iconAnchor: [30, 41],
  popupAnchor: [0, -41],
});

const defaultIcon = new Icon({
  iconUrl: restaurant,
  iconSize: [30, 41],
  iconAnchor: [30, 41],
  popupAnchor: [0, -41],
});

const MapComponent = ({ setCoordinates, coordinates, setBounds, places }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current && coordinates.lat !== 0 && coordinates.lng !== 0) {
      const map = mapRef.current;
      map.setView(coordinates);
    }
  }, [coordinates]);

  const MapWrapper = () => {
    const map = useMap();

    useEffect(() => {
      if (map && coordinates.lat !== 0 && coordinates.lng !== 0) {
        map.setView(coordinates, 10);
      }
    }, [map, coordinates]);

    useEffect(() => {
      const handleMoveEnd = () => {
        if (map) {
          const bounds = map.getBounds();
          const center = map.getCenter();
          const ne = bounds.getNorthEast();
          const sw = bounds.getSouthWest();

          setCoordinates({ lat: center.lat, lng: center.lng });
          setBounds({
            northeast: { lat: ne.lat, lng: ne.lng },
            southwest: { lat: sw.lat, lng: sw.lng },
          });
        }
      };

      map.on("moveend", handleMoveEnd);

      return () => {
        map.off("moveend", handleMoveEnd);
      };
    }, [map, setBounds, setCoordinates]);

    return null;
  };

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      whenCreated={(map) => {
        mapRef.current = map;
      }}
      style={{ width: "100%", height: "700px" }}
    >
      <Search setCoordinates={setCoordinates} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {places && places.length > 0 ? (
        places.map((place, i) => {
          const latitude = Number(place.latitude);
          const longitude = Number(place.longitude);

          if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
            // Handle invalid latitude or longitude values
            return null; // Skip rendering the marker
          }

          return (
            <Marker position={[latitude, longitude]} icon={defaultIcon} key={i}>
              <Popup>
                <PopupDetails place={place} />
              </Popup>
            </Marker>
          );
        })
      ) : (
        <Marker position={coordinates} icon={locationIcon} />
      )}

      <MapWrapper />
    </MapContainer>
  );
};

export default MapComponent;
