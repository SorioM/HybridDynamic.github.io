import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faqs.css';

const Faqs = () => {
  return (
    <div className='faq-div'>
        <Typography variant='h4' style={{textAlign:'center', fontWeight:'bold', padding:'20px', marginBottom:'40px'}}>Frequently Asked Questions</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Do I need to subscribe for Hybrid Dynamic?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, Hybrid Dynamic is totally free an you don't need to subscribe.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is there any hidden charges?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are no hidden cahrges. You can choose from hundreds of workouts for a whole body and mind approach to feeling great.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>If there's any problem how can I contact you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can got to our Contact Us page and you can fill up the form. Our team will contact you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Faqs

