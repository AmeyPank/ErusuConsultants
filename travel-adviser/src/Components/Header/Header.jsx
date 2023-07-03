import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import "./Header.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Search from "./Search";
const Header = ({ setCoordinates, type, setType }) => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <Button color="inherit">
          <CalendarMonthIcon />
          Enter Dates
        </Button>

        <Search setCoordinates={setCoordinates} />
        <Typography variant="h6" className="filter">
          Filters
        </Typography>
        <Select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          sx={{ width: 200 }}
          className="type"
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
