import React from "react";
import { Box, padding } from "@mui/system";
import { Button, Paper, Fab } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import "../career/Career.css";

const Contact = (props) => {
  const clickon = () => {
    window.open("https://forms.gle/zi3vC9hNFjNWiwkN8", "_blank");
  };

  const applyContent = (
    <p className="applycont">
      {" "}
      For more details .Click on this button.
    </p>
  );

  return (
    <div className="Content" style={{ marginTop: props.topMargin }}>
      <Box
        id="box1"
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 5,

            backgroundColor: "#202020",
            color: "white",
            fontSize: "1em",
            padding: "3em",
            borderRadius: "1.5em",
            textAlign: "center",
          },
        }}
      >
        <Paper
          id="paperr"
          className="applycont"
          variant="outlined"
          elevation={24}
          maxWidth="34em"
        >
          {applyContent}
          <Fab
            id="fabico"
            style={{
              backgroundColor: "#026605",
            }}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            onClick={() => {
              clickon();
            }}
          >
            <LinkIcon sx={{ mr: 1, color: "white" }} />
          </Fab>
        </Paper>
      </Box>
    </div>
  );
};

export default Contact;
