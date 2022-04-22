import React from "react";
import { Box, padding } from "@mui/system";
import { Button, Paper, Fab } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import './Career.css'

const Careers = (props) => {
  const clickon = () => {

    window.open('https://forms.gle/MZqEhAtLhEMfd3SG8', '_blank');


  }

  const applyContent = (
    <p
      className="applycont"> Young Professional (Sr. Grade)
      Qualifications: Graduate in any discipline from the listed Universities/Institutions under UGC

      Desirable: Good Communication Skills, Computer Skills, minimum 01 year experience in innovation scouting/entrepreneurship development/ design centre/maker’s lab etc., experience in conducting outreach activities, capacity building programs, Ideathons/Hackathons etc.

      Criterion is relaxed for the deserving candidates

      Location: Meerut, Uttar Pradesh

      Salary:  Rs. 25000 – Rs. 30,000 pm (consolidated)

      Young Professional
      Qualifications: Graduate in any discipline from the listed Universities/Institutions under UGC

      Desirable: Good Communication Skills, Computer Skills, 0-1 year experience in innovation scouting/entrepreneurship development/ design centre/maker’s lab etc., ability to organise events offline/online

      Criterion is relaxed for the deserving candidates

      Location: Meerut, Uttar Pradesh

      Salary:  Rs. 15000 – Rs. 25,000 pm (consolidated)

      Mode of application

      Please submit your relevant details by clicking “APPLY NOW” button below</p>
  );









  return (
    <div className="Content" style={{ marginTop: props.topMargin }}>
      <Box
        id='box1'
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 5,
            
            

            backgroundColor: '#202020',
            color: 'white',
            fontSize:"1em",
            padding:"3em",
            borderRadius:"1.5em",
            textAlign:"center"
           











          },
        }}
      >

        <Paper
        id="paperr"

          className="applycont"
          variant="outlined"
          elevation={24}
          maxWidth = '34em'
           >
         

          {applyContent}
          <Fab
            id="fabico"
            style={
              {
                backgroundColor: '#026605',
                
                
                
              }
            }
            variant='extended'
            size="medium" color="primary" aria-label="add"
            onClick={() => { clickon() }}>
            <LinkIcon sx={{ mr: 1, color: 'white' }} />

          </Fab>

        </Paper>
      </Box>
    </div >
  );
};

export default Careers;
