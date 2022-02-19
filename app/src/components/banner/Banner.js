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
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="Logo"
        src={acicMiet}
        alt="acicLogo"
        style={{ width: "25rem" }}
      />
      <div className="incubation-wrapper">
        <h1 className="incubation">INCUBATION </h1>
        <h1 className="incubation">CENTRE</h1>
        <h1 className="incubation">MIET MEERUT</h1>
      </div>
      <div>
        <Button className="apply" variant="contained" size="large">
          Apply now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
