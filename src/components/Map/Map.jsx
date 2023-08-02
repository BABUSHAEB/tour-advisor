import React from "react";

import GoogleMapReact from "google-map-react";
import { Box, Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapStyles from "./MapStyles";

export const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  // alert(isDesktop);
  // console.log(places);

  return (
    <Box
      sx={{
        height: "85vh",
        width: "100%",
        // position: "relative",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          // disableDefaultUI: true,
          zoomControl: true,
          styles: MapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {}}
      >
        {places?.length > 0 &&
          places?.map((place, i) => (
            <div
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                "&:hover": { zIndex: 4 },
              }}
            >
              {/* <LocationOnIcon color="secondary" fontSize="larger" /> */}
              {!isDesktop ? (
                <LocationOnIcon color="secondary" fontSize="10rem" />
              ) : (
                <Paper
                  elevation={3}
                  sx={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100px",
                    zIndex: 1,
                    "&:hover": { zIndex: 4 },
                  }}
                >
                  <Typography
                    // className="typography"
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    sx={{
                      cursor: "pointer",
                    }}
                    src={
                      place?.photo
                        ? place.photo.images.large.url
                        : "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </Box>
  );
};
