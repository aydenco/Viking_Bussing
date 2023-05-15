import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How much does it cost?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant= 'inherit'>
                An arm and a leg. Read the prices list. Smh
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How long do I have to get to the bus stop?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Learn time management and this won't be a problem
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Are Pets Allowed?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Only service animals and Little Sebastian are allowed on our busses.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>Is there a dress code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Formal or Semi-Formal Attire are acceptable. You will not be admitted if you are wearing jorts. We will not be expanding on this.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>Can my friend use my pass?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Can I use your Social Security Card?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    }