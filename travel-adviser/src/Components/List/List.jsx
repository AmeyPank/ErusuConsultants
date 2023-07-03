import React, { createRef, useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SliderComponent from "../Slider/SliderComponent";
import "./List.css";
const List = ({ places }) => {
  // console.log(places);
  const [elRefs, setElRefs] = useState([]);

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
