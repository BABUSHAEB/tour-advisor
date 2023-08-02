import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
export const PlaceDetails = ({ place }) => {
  return (
    <div>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>

          {place?.rating && (
            <Box display="flex" justifyContent="space-between">
              <Rating size="small" value={Number(place.rating)} readOnly />
              <Typography gutterBottom variant="subtitle1">
                Out of {place.num_reviews} reviews
              </Typography>
            </Box>
          )}
          {place?.price_level && (
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Price</Typography>
              <Typography gutterBottom variant="subtitle1">
                {place.price_level}
              </Typography>
            </Box>
          )}
          {place?.ranking && (
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Ranking</Typography>
              <Typography gutterBottom variant="subtitle1">
                {place.ranking}
              </Typography>
            </Box>
          )}
          <div>
            {place?.awards &&
              place?.awards?.map((award, index) => {
                return (
                  <Box
                    key={index}
                    my={1}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <img src={award.images.small} alt={award.display_name} />
                    <Typography variant="subtitle2" color="textSecondary">
                      {award.display_name}
                    </Typography>
                  </Box>
                );
              })}
          </div>
          {place?.cuisine &&
            place?.cuisine?.map((cuisine, index) => {
              return (
                <Chip
                  key={index}
                  size="small"
                  label={cuisine.name}
                  sx={{ m: "3px" }}
                />
              );
            })}

          {place?.address && (
            <Typography
              variant="subtitle2"
              color="textSecondary"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
              }}
            >
              <LocationOnIcon sx={{ mr: 2, fontSize: "2rem" }} />{" "}
              {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography
              variant="subtitle2"
              color="textSecondary"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                py: 1,
              }}
            >
              <CallIcon /> {place.phone}
            </Typography>
          )}
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip Advisor
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};
