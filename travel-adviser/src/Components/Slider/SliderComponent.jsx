import React, { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const SliderComponent = ({ places }) => {
  const [range, setRange] = useState(1); // Initial range value is 1
  const handleRangeChange = (event, newValue) => {
    setRange(newValue);
  };

  const filteredPlaces = places.filter((place) => place.distance <= range);

  return (
    <div>
      <Box
        marginLeft={2}
        style={{ backgroundColor: "lightblue" }}
        width={220}
        padding={2}
        marginTop={2}
        borderRadius={10}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography id="range-slider" gutterBottom>
            Distance
          </Typography>
          <Typography variant="body1" gutterBottom>
            {range}KM
          </Typography>
        </Box>

        <Slider
          value={range}
          onChange={handleRangeChange}
          min={1}
          max={5}
          step={1}
          marks
          valueLabelDisplay="auto"
          aria-label="Range"
          style={{ width: "200px", marginTop: "40px" }}
        />
      </Box>

      <div>
        {filteredPlaces.map((place) => {
          console.log(filteredPlaces.length);
          return <PlaceDetails place={place} />;
        })}
      </div>
    </div>
  );
};

export default SliderComponent;
