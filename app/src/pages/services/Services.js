import React,{useState} from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import List1 from "../Features/List1";
import { padding, style } from "@mui/system";
import {List1,List2,List3,List4,List5,List6,List7,List8} from "./List.jsx"
import "./service.css";


const Services = (props) => {



  
  return (
    <>
      <div id="feat">
        <Box
          id="feat1"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "80%",
              height: "68vhvh",
              margin: "20vh",
              
            },
          }}
        >
          <Paper
            elevation={10}
            sx={{
              borderRadius: "2em",
              backgroundColor: "black",
              padding: "2em",
              overflow: "scroll",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                textAlign: "center",
                color: "whitesmoke",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              Services
            </Typography>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panella"
                >
                  <Typography>Mentoring Support</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <List1/>
               
               
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="panella"
                >
                  <Typography>LAB Facilities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <List2/>
                
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                  className="panella"
                >
                  <Typography>Design & Prototyping</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <List3/>
                
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panella"
                >
                  <Typography>IPR Support</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List4/>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panella"
                >
                  <Typography>Office space</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List5/>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panella"
                >
                  <Typography>Consultancy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List6/>
                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="panella"
                >
                  <Typography>Innovator Fellowship</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List7
                  
                
                  />
                </AccordionDetails>
              </Accordion>

              


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // onMouseOver={()=>effect()}
                  className="panella"

                >
                  <Typography>Pre-Incubation and Incubation Support</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List8/>
                </AccordionDetails>
              </Accordion>
            </div>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default Services;
