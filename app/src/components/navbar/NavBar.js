import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const pages = [
  "Home",
  "Services",
  "Outcome",
  "Apply",
  "Careers",
  "Contact",
  "Mail",
];

const NavBar = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const dropDownMenu = (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page}
            onClick={() => {
              navigate(`/${page.toLowerCase()}`);
              setAnchorEl(null);
            }}
          >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  const desktopNav = (
    <Box
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        width: "90vw",
      }}
    >
      {pages.map((page, index) => (
        <Button
          key={index}
          varient="text"
          size="medium"
          onClick={() => {
            navigate(`/${page.toLowerCase()}`);
          }}
          style={{
            width: "8rem",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(25px)",
        background: "rgb(10 10 10 / 88%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar style={{ justifyContent: "space-between" }} disableGutters>
          {/* {isPhone ? logoPhone : logoDefault} */}
          <div>{isPhone ? dropDownMenu : desktopNav}</div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
