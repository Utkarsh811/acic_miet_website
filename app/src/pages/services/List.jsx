import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import ImageIcon from "@mui/icons-material/Image";

export const List1 = () => {
  const arr1 = [
    "All around Mentoring Including Technical and Business Mentoring",
    "Progress Review and Tracking"
  ];

  return (
    <>
      {arr1.map((index) => {
        return (
          <List sx={{ width: "100%", maxWidth: "100vw", bgcolor: "#e7dcdc"}}>
            <ListItem>
              <ListItemAvatar>
                {/* <Avatar>
                  <ImageIcon />
                </Avatar> */}
              </ListItemAvatar>
              <ListItemText primary={index} secondary="" />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};

export const List2 = () => {
  const arr1 = [
    "Maker’s Space and Fab. Lab.",
    "Cell Culture Lab",
    "Advanced Automation Lab.",
    "IoT",
    "Testing and Measurement",
    "Hydroponics and Aquaponics"
  ];

  return (
    <>
      {arr1.map((index) => {
        return (
          <List sx={{ width: "100%", maxWidth: "100vw", bgcolor: "#e7dcdc"}}>
            <ListItem>
              <ListItemAvatar>
              
              </ListItemAvatar>
              <ListItemText primary={index} secondary="" />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};

export const List3 = () => {
  const arr1 = [
    "CAD Designing",
    "3D Scanning",
    "CAM (Computer Aided Manufacturing)",
    "3D Printing Support",
    "Trademarks/Copyrights/ Design and Utility Patent’s drafting and Filing"
  ];

  return (
    <>
      {arr1.map((index) => {
        return (
          <List sx={{ width: "100%", maxWidth: "100vw", bgcolor: "#e7dcdc" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <ImageIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={index} secondary="" />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};
export const List4 = () => {
  const arr1 = [
    "Shared Office Space",
    "Internet Facility",
    "Electricity",
    "Conference/Discussion Room"
  ];

  return (
    <>
      {arr1.map((index) => {
        return (
          <List sx={{ width: "100%", maxWidth: "100vw", bgcolor: "#e7dcdc" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <ImageIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={index} secondary="" />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};

export const List5 = () => {
  const arr1 = [
    "Product Design",
    "SME Manufacturing",
    "Animal Testing",
    "Automation and Control"
  ];

  return (
    <>
      {arr1.map((index) => {
        return (
          <List sx={{ width: "100%", maxWidth: "100vw", bgcolor: "#e7dcdc" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <ImageIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={index} secondary="" />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};

export const List6 = () => {
  const arr1 = [
    "CAD Designing",
    "3D Scanning",
    "CAM (Computer Aided Manufacturing)",
    "3D Printing Support"
  ];

  return (
    <>
      {arr1.map((index) => {
        return (
          <List sx={{ width: "100%", maxWidth: "100vw", bgcolor: "#e7dcdc" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <ImageIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={index} secondary="" />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};

export const List7 = () => {
  const arr1 = [
    "CAD Designing",
    "3D Scanning",
    "CAM (Computer Aided Manufacturing)",
    "3D Printing Support"
  ];

  return (
    <>
      {arr1.map((index) => {
        return (
          <List sx={{ width: "100%", maxWidth: "100vw", bgcolor: "#e7dcdc" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <ImageIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={index} secondary="" />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};

export const List8 = () => {
  const arr1 = [
    "Community Innovator Fellowship (CIF) in collaboration with NITI Aayog and UNDP",
    "Innovator Fellowships to the winners of Ideathons/Hackathons",
    "Pre-Incubation and Incubation Support",
    "All standard services, for details contact [Contact Form same] - Redirect to Contact us page APPLY NOW [Application from which is on home page] - BUTTON"
    
  ];

  return (
    <>
      {arr1.map((index) => {
        return (
          <List sx={{ width: "100%", maxWidth: "100vw", bgcolor: "#e7dcdc" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <ImageIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={index} secondary="" />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};
