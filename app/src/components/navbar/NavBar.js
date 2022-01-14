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

import acicMiet from "../../assets/acicMiet.png";
import acicMietPhone from "../../assets/acicMietPhone.png";

const pages = [
  "Services",
  "Outcome",
  "Apply",
  "Careers",
  "Contact",
  "Web mail",
];

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logoPhone = (
    <img src={acicMietPhone} alt="acicLogo" style={{ width: "10rem" }} />
  );

  const logoDefault = (
    <img src={acicMiet} alt="acicLogo" style={{ width: "18%" }} />
  );

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
          <MenuItem key={page} onClick={handleCloseMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  const desktopNav = (
    <Box style={{ flex: 1, justifyContent: "space-evenly" }}>
      {pages.map((page, index) => (
        <Button key={index} varient="text" color="inherit" size="small">
          {page}
        </Button>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ backdropFilter: "blur(30px)", background: "#f5f5f5" }}
    >
      <Container maxWidth="xl">
        <Toolbar style={{ justifyContent: "space-between" }} disableGutters>
          {isPhone ? logoPhone : logoDefault}
          <div>{isPhone ? dropDownMenu : desktopNav}</div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
