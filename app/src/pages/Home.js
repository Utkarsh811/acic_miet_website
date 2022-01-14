import { useTheme } from "@mui/material/styles";
import React from "react";

import TypeEffects from "../components/extra/TypeEffect";

const Home = (props) => {
  const theme = useTheme();
  let minHeight = Number(theme.mixins.toolbar.minHeight);

  return (
    <div style={{ marginTop: minHeight + 50 }}>
      <TypeEffects />
    </div>
  );
};

export default Home;
