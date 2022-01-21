import React from "react";

import acicMiet from "../../assets/acicMiet.png";
import acicMietPhone from "../../assets/acicMietPhone.png";

const Banner = (props) => {
  return (
    <div className="Logo">
      <img src={acicMiet} alt="acicLogo" style={{ width: "20rem" }} />
    </div>
  );
};

export default Banner;
