import React, { useState } from "react";
import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";

export const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("0");

  return (
    <>
      <div
        sx={{
          padding: "25px",
          pt: 4,
        }}
      >
        <Typography variant="h4">
          Restaurant, Hotels & Attraction around you
        </Typography>
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
            <MenuItem value="attraction">Attraction </MenuItem>
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
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
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
            <Grid item key={i} xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};