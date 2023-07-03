import React, { useState, useEffect, useRef } from "react";
import {
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import "./Header.css";
const Search = ({ setCoordinates }) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchValue.trim() === "") {
        setSuggestions([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${searchValue}`
        );

        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    const { lat, lon } = suggestion;
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);
    console.log({ lat: latitude, lng: longitude }); // Log the coordinates
    setCoordinates({ lat: latitude, lng: longitude }); // Set the coordinates
    // map.flyTo([latitude, longitude], 13); // Update the map view
    setSearchValue("");
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    return (
      <List
        sx={{
          position: "absolute",
          top: "100%",
          left: 375,
          width: "100%",
          maxWidth: 700,
          maxHeight: 200,
          overflow: "auto",
          backgroundColor: "#fff",
          boxShadow: 1,
          zIndex: 9999,
        }}
      >
        {suggestions.map((suggestion, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            <ListItemText primary={suggestion.display_name} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <div ref={searchRef}>
      <TextField
        variant="outlined"
        placeholder="Where to?"
        value={searchValue}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <IconButton size="small" edge="start" disabled>
              <SearchIcon />
            </IconButton>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            width: "700px",
            height: "40px",
            boxShadow: 3,
          },
        }}
      />

      {suggestions.length > 0 && renderSuggestions()}
    </div>
  );
};

export default Search;
