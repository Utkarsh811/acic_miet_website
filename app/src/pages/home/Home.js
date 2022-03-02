import React from "react";
import { useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";


import TypeEffects from "../../components/extra/TypeEffect";
import Carousel from "../../components/carousel/Carousel";

import "./home.css";
import Banner from "../../components/banner/Banner";

const Home = (props) => {
  const theme = useTheme();
  let minHeight = Number(theme.mixins.toolbar.minHeight);

  const aboutus = (
    <p className="about">
      Atal Innovation Mission (AIM) at NITI Aayog is mandated to promote a
      culture of innovation and entrepreneurship in India. Until now, AIM has
      selected 102 institutions for supporting them in establishment of Atal
      Incubation Centres (AICs) programme so far. AIM has also selected over
      8800 schools for their establishment as Atal Tinkering Labs (ATLs) which
      have the potential to build a culture of innovation and technology
      adoption in India
    </p>
  );

  const aboutDetails = (
    <p className="about">
      There is still a need for creating opportunities for the community towards
      strengthening the innovation ecosystem and offer them space and an
      enabling environment for the conceptualisation of innovative products. In
      fulfilling the commitments to serve the society, the creative ideas and
      innovative thoughts are required to give shape into proof of concept,
      pre-prototype and prototype, having the potential to be transformed into a
      Minimum Viable Product for the benefit of society and offering unique
      innovative solutions. AIM proposes to support the establishment of
      community innovation centres for this purpose. These centres will provide
      requisite infrastructure for innovation in the unserved / underserved
      regions or having potential to build innovation ecosystems in various
      parts of the country. Thus, nurturing entrepreneurs from the community to
      help them address various societal challenges. The initiative of AIM as
      Atal Community Innovation Centre (ACIC)
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
        padding: "0px 5%",
      }}
    >
      <Banner style={{ alignSelf: "flex-start" }} />
      <Paper
        className="aboutus"
        elevation={5}
        style={{ backgroundColor: "#202020", padding: "1rem" }}
      >
        <TypeEffects />
        {aboutus}

        {aboutDetails}
      </Paper>
      <Carousel />
    </div>
  );
};

export default Home;
