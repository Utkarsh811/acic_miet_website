import * as React from "react";

import {
  Fab,
  getToggleButtonGroupUtilityClass,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import { Button } from "@mui/material";

export const Flist1 = () => {
  const content = (
    <Typography>
      ACIC MIET Meerut Foundation provide the maker ‘s space to innovators where
      they can implement their idea. This space equipped with air conditioning
      and all tinkering tools like soldering station, unlimited internet Wi-Fi,
      separate cubical and one meeting room with smart board to brainstorm their
      ideas.
    </Typography>
  );

  return (
    <>
      <Box>
        <Paper
          variant="outlined"
          elevation={3}
          sx={{
            maxWidth: "100vw",
            minHeight: "20vh",
            borderRadius: "1rem",
            padding: "1rem",
            bgcolor: "#e7dcdc",
          }}
        >
          {content}

          <Fab size="small" variant="extended"></Fab>
        </Paper>
      </Box>
    </>
  );
};

export const Flist2 = () => {
  const content = <Typography></Typography>;
  const gonow = () => {
    return window.open(
      "https://drive.google.com/file/d/1xexi4xyG3cl3dzldc_PjQLVMAsdZ15yz/view?usp=sharing"
    );
  };

  return (
    <>
      <Box>
        <Paper
          variant="outlined"
          elevation={3}
          sx={{
            maxWidth: "100vw",
            minHeight: "20vh",
            borderRadius: "1rem",
            padding: "1rem",
            bgcolor: "#e7dcdc",
          }}
        >
          <Fab size="small" variant="extended" onClick={() => gonow()}>
            More
          </Fab>
        </Paper>
      </Box>
    </>
  );
};

export const Flist3 = () => {
  const content = (
    <Typography>
      ACIC MIET Meerut Foundation provide FAB-LAB to the innovators where they
      can fabricate their product part. This lab is equipped with CNC Milling
      Machine, Fiber laser engraving machine, CO2 Laser Cutting Machine, All
      Mechanical Tools, Ultimate Tensile Test Machine, Pillar Drill Machine, Jig
      Saw Machine, H/V Sander Machine, 3D Printer and 3D Scanner etc.
    </Typography>
  );
  const gonow = () => {
    return window.open(
      "https://drive.google.com/file/d/1a1bVtUK0AgyaPzSOUhuHFEkPbriPdFEM/view?usp=sharing"
    );
  };

  return (
    <>
      <Box>
        <Paper
          variant="outlined"
          elevation={3}
          sx={{
            maxWidth: "100vw",
            minHeight: "20vh",
            borderRadius: "1rem",
            padding: "1rem",
            bgcolor: "#e7dcdc",
          }}
        >
        {content}
          <Fab size="small" variant="extended" onClick={() => gonow()}>
            More
          </Fab>
        </Paper>
      </Box>
    </>
  );
};
