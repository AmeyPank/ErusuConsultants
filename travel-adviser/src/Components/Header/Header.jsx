import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import "./Header.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Search from "./Search";

const Header = ({ setCoordinates, type, setType }) => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <Box
          display="flex"
          alignItems="center"
          boxShadow={2}
          borderRadius={5}
          width={130}
          height={40}
          padding={1}
        >
          <CalendarMonthIcon />
          <span style={{ cursor: "pointer" }}>Enter Dates</span>
        </Box>

        <Search setCoordinates={setCoordinates} />

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            className="filter"
            width={100}
            height={40}
            borderRadius={5}
            boxShadow={2}
            sx={{ marginRight: 2 }}
          >
            Filters
          </Typography>

          <Select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{
              borderRadius: "50px",
              height: "45px",
              width: "150px",
            }}
            className="custom-select" // Add a custom class name
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
