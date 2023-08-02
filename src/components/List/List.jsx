import React, { useState, useEffect, createRef, useRef } from "react";
import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";

export const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);

  // const ref = useRef();

  // useEffect(() => {
  //   let refs = Array(places?.length)
  //     .fill()
  //     .map((_, i) => refs[i] || createRef());
  //   setElRefs(refs);
  // }, [places]);
  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <>
      <Box
        sx={{
          padding: "25px",
          pt: 0,
        }}
      >
        <Typography variant="h4">
          Restaurant, Hotels & Attraction around you
        </Typography>

        {isLoading ? (
          <div
            style={{
              height: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size="5rem" color="secondary" />
          </div>
        ) : (
          <>
            <FormControl
              variant="standard"
              sx={{
                margin: 1,
                minWidth: 120,
                marginBottom: "30px",
                border: "none",
              }}
            >
              <InputLabel> Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants </MenuItem>
                <MenuItem value="hotels">Hotels </MenuItem>
                <MenuItem value="attractions">Attraction </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{
                margin: 1,
                minWidth: 120,
                marginBottom: "30px",
              }}
            >
              <InputLabel> Rating</InputLabel>
              <Select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <MenuItem value="0">All </MenuItem>
                <MenuItem value="3">Above 3.0 </MenuItem>
                <MenuItem value="4">Above 4.0 </MenuItem>
                <MenuItem value="4.5">Above 4.5 </MenuItem>
              </Select>
            </FormControl>

            <Grid
              container
              spacing={3}
              sx={{
                height: "75vh",
                overflow: "auto",
              }}
            >
              {places?.map((place, i) => (
                <Grid ref={elRefs[i]} item key={i} xs={12}>
                  <PlaceDetails
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={place}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};
