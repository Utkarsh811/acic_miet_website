import React from "react";
import { Button, Paper, tabClasses } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Marquee from 'react-double-marquee';
import { red } from "@mui/material/colors";


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));



const WhatsNew = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const feloclick = () => {
    window.open("https://drive.google.com/file/d/1-p5HeUGYqeVVlJnMD7lTJ_yfiWornPRw/view?usp=sharing", "_blank")
  }
  const hoverr = () => {
    document.getElementById('felobtn').style.border = "2px dashed darkblue";
  }
  const dwnhoverr = () => {
    document.getElementById('felobtn').style.border = "none";

  }



  return (
    <Paper
      className="whatsnew"
      elevation={5}
      style={{
        backgroundColor: "#202020",
        padding: "1.45rem",
        flexBasis: "100%",
        textAlign: "center",
      }}
    >
      <h2>Activities & Updates</h2>
      <TableContainer component={Paper}
        style={{
          borderRadius: "1rem"
        }}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  variant="contained"

                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  style={{
                    backgroundColor: "darkblue"
                  }}
                >
                  ACIC Fellowship
                </Button>
                <div
                  style={{
                    width: '400px',
                    whiteSpace: 'nowrap',
                   
                    

                  }}
                >
                  <Marquee
                  
                  direction = {"left"}
                  
                  
                  >

                    Community Innovation Fellowship for year 2022 have been announced.
                  </Marquee>

                </div>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}

                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    <Button

                      id="felobtn"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "medium"
                      }}
                      onMouseOver={() => (hoverr())}
                      onMouseOut={() => (dwnhoverr())}
                      onClick={() => { feloclick() }}>
                      Fellowship overview</Button>


                  </MenuItem>
                  <MenuItem
                    onClick={handleClose} disableRipple>
                    <FileCopyIcon />
                    <Button


                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "medium"
                      }}
                      onMouseOver={() => (hoverr())}
                      onMouseOut={() => (dwnhoverr())}
                    >
                      Program Structure</Button>

                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <QuestionAnswerIcon />
                    <Button


                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "medium"
                      }}
                      onMouseOver={() => (hoverr())}
                      onMouseOut={() => (dwnhoverr())}
                    >
                      Fellowship FAQs</Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <MoreHorizIcon />
                    <Button


                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "medium"
                      }}
                      onMouseOver={() => (hoverr())}
                      onMouseOut={() => (dwnhoverr())}
                    >
                      Resources</Button>
                  </MenuItem>
                </StyledMenu>

              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Redirect link 2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper >
  );
};

export default WhatsNew;
