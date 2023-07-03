import { Paper, Rating, Typography } from "@mui/material";
import React from "react";

const Popup = ({ place }) => {
  const handlePopupClick = () => {
    if (place.website) {
      window.open(place.website, "_blank");
    }
  };

  const popupStyle = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  };

  const pointerStyle = {
    cursor: "pointer",
  };

  return (
    <div>
      <Paper elevation={3} style={popupStyle} onClick={handlePopupClick}>
        <Typography variant="subtitle2" gutterBottom>
          {place.name}
        </Typography>
        <img
          style={pointerStyle}
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
        />
        <Rating
          name="read-only"
          size="small"
          value={Number(place.rating)}
          readOnly
        />
      </Paper>
    </div>
  );
};

export default Popup;
