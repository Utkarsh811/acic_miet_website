import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List1 from "./List1";
import { padding } from "@mui/system";




const Features = (props) => {



  return (

    <>


      <div id="feat">
        <Box
          id="feat1"


          sx={{

            display: 'flex',
            flexDirection: "column",
            alignContent: "center",
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: "80%",
              height: "60vh",
              margin: "20vh"

            },
          }}
        >


          <Paper elevation={10}
            sx={{
              borderRadius: "2em",
              backgroundColor: "black",
              padding: "2em",
              overflow: "scroll"
            }} >
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                textAlign: "center",
                color: "whitesmoke",
                flexDirection: "row",
                justifyContent: "space-around"
              }}>Facilities</Typography>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Lifesciences</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List1 />

                </AccordionDetails>
              </Accordion>



              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>3D Printing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>



              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Automation</Typography>
                </AccordionSummary>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Fabrication</Typography>
                </AccordionSummary>
                <AccordionDetails>


                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>IOT</Typography>
                </AccordionSummary>
                <AccordionDetails>


                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>MakenLab</Typography>
                </AccordionSummary>
                <AccordionDetails>


                </AccordionDetails>
              </Accordion>




            </div>
          </Paper>
        </Box>
      </div>




    </>
  );
};

export default Features;
