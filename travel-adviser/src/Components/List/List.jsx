import React, { createRef, useEffect, useState } from "react";
import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SliderComponent from "../Slider/SliderComponent";
import useMediaQuery from "@mui/material/useMediaQuery";
const List = ({ type, setType, places }) => {
  // console.log(places);
  const [elRefs, setElRefs] = useState([]);
  const matches = useMediaQuery("(max-width: 600px)");
  useEffect(() => {
    if (places) {
      setElRefs((refs) =>
        Array(places.length)
          .fill()
          .map((_, i) => refs[i] || createRef())
      );
    }
  }, [places]);
  if (!places || places.length === 0) {
    return (
      <div>
        <Typography marginTop={2} marginLeft={40}>
          No places found.
        </Typography>
      </div>
    );
  }

  return (
    <div style={{ overflow: "auto", maxHeight: "100vh" }}>
      <SliderComponent places={places} />
      <Box display="flex" alignItems="center" padding={2}>
        <Typography
          variant="body1"
          component="div"
          display="flex"
          alignItems="center"
        >
          {places.length} Places found around you{" "}
          <span>
            <InfoOutlinedIcon style={{ paddingTop: "8px" }} />
          </span>
        </Typography>
      </Box>

      {matches && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            className="filter"
            width={100}
            height={40}
            borderRadius={5}
            boxShadow={2}
            sx={{ marginRight: 2 }}
          >
            Filters
          </Typography>

          <Select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{
              borderRadius: "50px",
              height: "45px",
              width: "150px",
            }}
            className="custom-select" // Add a custom class name
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </Box>
      )}
      <Grid container spacing={3}>
        {places?.map((place, i) => (
          <Grid ref={elRefs[i]} key={i} item xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
