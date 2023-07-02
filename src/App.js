
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';

// import PlaceDetails from './Components/PlaceDetails/PlaceDetails';

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
