import React from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  HeaderAppBar,
  HeaderToolbar,
  HeaderTitle,
  HeaderSearch,
  HeaderSearchIcon,
  HeaderInput,
} from "./styles";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <HeaderAppBar position="static">
      <HeaderToolbar>
        <HeaderTitle variant="h5">Travel Advisor</HeaderTitle>
        <Box >
          {/* <HeaderTitle variant="h6">Explore new places</HeaderTitle> */}
          <HeaderSearch>
            <HeaderSearchIcon>
              <SearchIcon />
            </HeaderSearchIcon>
            <HeaderInput placeholder="Search…" />
          </HeaderSearch>
        </Box>
      </HeaderToolbar>
    </HeaderAppBar>
  );
};

export default Header;

// import React from "react";
// import { styled } from "@mui/material/styles";
// import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// const HeaderAppBar = styled(AppBar)({
//   backgroundColor: "your-color-here",
// });

// const HeaderToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });

// const HeaderTitle = styled(Typography)({
//   fontWeight: "bold",
//   marginRight: "your-spacing-here",
// });

// const HeaderSearch = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: theme.palette.common.white,
//   "&:hover": {
//     backgroundColor: theme.palette.common.white,
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const HeaderSearchIcon = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const HeaderInput = styled(InputBase)(({ theme }) => ({
//   padding: theme.spacing(1, 1, 1, 0),
//   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//   transition: theme.transitions.create("width"),
//   width: "100%",
//   [theme.breakpoints.up("md")]: {
//     width: "20ch",
//   },
// }));

// const Header = ({ onPlaceChanged, onLoad }) => {
//   return (
//     <HeaderAppBar position="static">
//       <HeaderToolbar>
//         <HeaderTitle variant="h5">Travel Advisor</HeaderTitle>
//         <Box display="flex">
//           <Typography variant="h6">Explore new places</Typography>
//           <HeaderSearch>
//             <HeaderSearchIcon>
//               <SearchIcon />
//             </HeaderSearchIcon>
//             <HeaderInput placeholder="Search…" />
//           </HeaderSearch>
//         </Box>
//       </HeaderToolbar>
//     </HeaderAppBar>
//   );
// };

// export default Header;
