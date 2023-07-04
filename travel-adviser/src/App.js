import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Header from './Components/Header/Header';
import { getPlacesData } from './api/travelAdvisorAPI';
import { useEffect, useMemo, useState } from 'react';
import MapComponent from './Components/Map/Map';
import List from './Components/List/List';
import "./App.css";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");

  useMemo(() => {
    if (bounds && coordinates) {
      getPlacesData(type, bounds.northeast, bounds.southwest).then((data) => {
        setPlaces(data);
      });
    }
  }, [coordinates, type, bounds]);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const position = await getCurrentPosition();
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentLocation();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  console.log(coordinates)
  console.log(places)

  return (
    <>
      <CssBaseline />
      <Header
        type={type}
        setType={setType}
        setCoordinates={setCoordinates}

      />
      <Grid container spacing={1} style={{ width: "100%" }}>
        <Grid item xs={12} md={6}>
          <List places={places} type={type} setType={setType} />
        </Grid>
        <Grid spacing={1} item xs={12} md={6}>
          {coordinates.lat !== 0 && (
            <MapComponent
              setBounds={setBounds}
              setCoordinates={setCoordinates}
              coordinates={coordinates}
              places={places}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
