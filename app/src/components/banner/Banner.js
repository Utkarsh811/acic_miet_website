import React from "react";
import { Button } from "@mui/material";

import acicMiet from "../../assets/acicMiet.png";
import "./banner.css";

const Banner = (props) => {
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
        <h1 className="incubation">INCUBATION CENTRE MIET MEERUT</h1>
      </div>
      <div>
        <Button
          className="apply"
          variant="contained"
          size="large"
          style={{ fontWeight: 600 }}
        >
          Apply now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
