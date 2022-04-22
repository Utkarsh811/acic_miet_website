import React from "react";
import { Button, Fab, Alert, Stack, AlertTitle } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

import acicMiet from "../../assets/acicMiet.png";
import "./banner.css";
import { useLinkClickHandler } from "react-router-dom";

const Banner = (props) => {
  const applyclick = () => {
    window.open("https://forms.gle/Mym41KM1NjGUf4AL9","_blank");
  };
  const clicked = () => {
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack>;
  };
  return (
    <div
      className="Banner"
      style={{
        display: "flex",
        width: "100vw",
        height: "70vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="Logo"
        src={acicMiet}
        alt="acicLogo"
        style={{ width: "22rem" }}
      />
      <div className="incubation-wrapper">
        <h1 className="incubation">ATAL COMMUNITY INNOVATION CENTER</h1>
        <h4 className="incubation">ACIC MIET Meerut FOUNDATION</h4>
      </div>
      <div>
        <Fab
          className="apply"
          color="primary"
          variant="extended"
          size="large"
          style={{ fontWeight: 600 }}
          id="btnapp"
          aria-label="add"
          onClick={() => {
            clicked();
          }}
        >
          <LinkIcon sx={{ mr: 1 }} />
          <p onClick={() => applyclick()}>Apply Now</p>
        </Fab>
      </div>
    </div>
  );
};

export default Banner;
