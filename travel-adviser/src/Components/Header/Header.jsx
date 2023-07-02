import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Typography,
  IconButton,
  Autocomplete,
  createFilterOptions,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    width: "500px",
    height: "35px",
  },
});
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

const Header = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <button color="inherit">
          <CalendarMonthIcon />
          Enter Dates
        </button>
        <CustomTextField
          variant="outlined"
          placeholder="Where to?"
          className="custom-text-field"
          InputProps={{
            startAdornment: (
              <IconButton size="small" edge="start" disabled>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ width: 300 }}
        >
          <Typography variant="h6" className="filter">
            Filters
          </Typography>
          <Autocomplete
            id="filter-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField className="filterInput" {...params} label="Filter" />}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
