import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // console.log(place);
  return (
    <Card elevation={6}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardMedia
            style={{ height: 300, marginTop: "15px", borderRadius: "20px" }}
            image={
              place.photo
                ? place.photo.images.large.url
                : "https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
            }
            title={place.name}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent style={{ height: 300 }}>
            <Box style={{ overflow: "auto", maxHeight: "300px" }}>
              <Typography gutterBottom variant="h5">
                {place.name}
              </Typography>
              <Box display="flex" justifyContent="space-between" my={2}>
                <Box>
                  <Rating
                    name="read-only"
                    value={Number(place.rating)}
                    readOnly
                  />
                  <Typography component="legend">
                    {place.num_reviews} review
                    {place.num_reviews > 1 && "s"}
                  </Typography>
                </Box>
                <Box>
                  <Typography component="legend">Price</Typography>
                  <Typography gutterBottom variant="subtitle1">
                    {place.price_level}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography component="legend">Ranking</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {place.ranking}
                </Typography>
              </Box>
              {place?.awards?.map((award) => (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  my={1}
                  alignItems="center"
                >
                  <img src={award.images.small} alt={award.display_name} />
                  <Typography variant="subtitle2" color="textSecondary">
                    {award.display_name}
                  </Typography>
                </Box>
              ))}
              {place?.cuisine?.map(({ name }) => (
                <Chip key={name} size="small" label={name} />
              ))}
              {place.address && (
                <Typography gutterBottom variant="body2" color="textSecondary">
                  <LocationOnIcon />
                  {place.address}
                </Typography>
              )}
              {place.phone && (
                <Typography variant="body2" color="textSecondary">
                  <PhoneIcon /> {place.phone}
                </Typography>
              )}
            </Box>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip Advisor
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PlaceDetails;
