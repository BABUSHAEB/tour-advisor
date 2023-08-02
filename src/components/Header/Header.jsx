import React, { useState } from "react";

import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

// import useStyles from "./styles";

export const Header = ({ setCoordinates }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  // const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Tour Advisor
          </Typography>
          <Box display="flex">
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Explore new places
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "10px",
                  backgroundColor: "whitesmoke",
                  // "&:hover": { backgroundColor: "#c9baba" },
                  marginRight: 2,
                  marginLeft: { xs: 0, sm: 3 },
                  //     width: "100%",
                  //     [theme.breakpoints.up("sm")]: {
                  //       marginLeft: theme.spacing(3),
                  width: { sm: "auto" },
                }}
              >
                <Box
                  sx={{
                    // padding: 2,
                    color: "#c9baba",
                    height: "100%",
                    position: "absolute",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SearchSharpIcon color="grey" />
                </Box>
                <InputBase
                  placeholder="Search ..."
                  sx={{
                    root: {
                      color: "inherit",
                    },
                    input: {
                      padding: "1 1 1 0",
                      paddingLeft: `calc(1em + 8px)`,
                      //     transition: theme.transitions.create("width"),
                      width: { xs: "100%", md: "20ch" },
                    }, //     [theme.breakpoints.up("md")]: { width: "20ch" }},
                  }}
                />
              </Box>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
