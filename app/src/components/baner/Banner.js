import React from "react";

import acicMiet from "../../assets/acicMiet.png";
import acicMietPhone from "../../assets/acicMietPhone.png";

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
      <img src={acicMiet} alt="acicLogo" style={{ width: "20rem" }} />
    </div>
  );
};

export default Banner;
