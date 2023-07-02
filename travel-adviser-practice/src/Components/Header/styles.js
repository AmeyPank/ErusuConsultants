import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, InputBase, alpha } from "@mui/material";

export const HeaderAppBar = styled(AppBar)({
    backgroundColor: "slategrey",
});

export const HeaderToolbar = styled(Toolbar)({
    display: "flex",
    // justifyContent: "space-between",
});

export const HeaderTitle = styled(Typography)({
    fontWeight: "bold",
    marginRight: "your-spacing-here",
});

export const HeaderSearch = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

export const HeaderSearchIcon = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    color: "slategray",
    alignItems: "center",
    justifyContent: "center",
}));

export const HeaderInput = styled(InputBase)(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 0),
    borderRadius: "20px", // Set the desired border radius value
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
        width: "20ch",
    },
}));


