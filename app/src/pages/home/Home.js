import React from "react";
import { useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

import TypeEffects from "../../components/extra/TypeEffect";

import "./home.css";

const Home = (props) => {
  const theme = useTheme();
  let minHeight = Number(theme.mixins.toolbar.minHeight);

  const aboutus = (
    <p>
      Atal Innovation Mission (AIM) at NITI Aayog is mandated to promote a
      culture of innovation and entrepreneurship in India. Until now, AIM has
      selected 102 institutions for supporting them in establishment of Atal
      Incubation Centres (AICs) programme so far. AIM has also selected over
      8800 schools for their establishment as Atal Tinkering Labs (ATLs) which
      have the potential to build a culture of innovation and technology
      adoption in India
    </p>
  );
  return (
    <div
      className="Content"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: minHeight + 15,
        padding: "0px 5%",
      }}
    >
      <TypeEffects />
      <Paper elevation={3} style={{ padding: "1rem" }}>
        {aboutus}
      </Paper>
    </div>
  );
};

export default Home;
