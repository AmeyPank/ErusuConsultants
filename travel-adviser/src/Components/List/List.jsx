import React, { createRef, useEffect, useState } from "react";
import { Grid, Slider, Typography } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const List = ({ places }) => {
  // console.log(places);
  const [elRefs, setElRefs] = useState([]);
  const [range, setRange] = useState("1km"); // Initial range value is 1KM
  const handleRangeChange = (event, newValue) => {
    setRange(newValue);
  };

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
      <Slider
        value={range}
        onChange={handleRangeChange}
        min={1}
        max={5}
        step={1}
        marks
        valueLabelDisplay="auto"
        aria-label="Range"
        style={{ width: "200px", backgroundColor: "#ccc", marginTop: "40px" }}
      />

      <Typography spacing={3} variant="h4">
        {places.length} Places found around you <InfoOutlinedIcon />
      </Typography>
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
