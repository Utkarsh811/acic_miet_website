import React from "react";
import { Box, padding } from "@mui/system";
import { Button, Paper,Fab } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import './Apply.css'

const Apply = (props) => {
  const clickon =() =>{
    
    window.open('https://forms.gle/iqSngfe3tjqqGm6r9', '_blank');
    

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
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 1000,
            height: 300,
            backgroundColor: '#202020',
            color: 'white',
            padding: '1rem',
            wordSpacing: '2 rem'


          },
        }}
      >

        <Paper

          className="applycont"
          variant="outlined"
          elevation={24} >

          {applyContent}
          <Fab 
          style={
            {
              backgroundColor : '#026605',
              padding: '0rem'
            }
          }
          variant = 'round'
          size="medium" color="primary" aria-label="add"
          onClick = {() => {clickon()}}>
          <LinkIcon sx={{ mr: 1 ,color : 'white' }} />
          
          </Fab>

        </Paper>
      </Box>
    </div>
  );
};

export default Apply;
