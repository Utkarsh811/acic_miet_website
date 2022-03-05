import React from "react";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const WhatsNew = (props) => {
  return (
    <Paper
      className="whatsnew"
      elevation={5}
      style={{
        backgroundColor: "#202020",
        padding: "0.5rem",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h2>Activities & Updates</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="left">Redirect link 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Redirect link 2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default WhatsNew;
