import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function SyllabusAccord({ question, answer,content }) {
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className='py-2'>
                <Accordion
                    expanded={expanded}
                    onChange={handleAccordionChange}
                   
                    sx={{
                        color: '#333',
                        padding: '1px',



                        background: expanded ? '#fff' : '#fff',
                        '&.Mui-expanded': {
                            background: '#fff',
                            border: '2px solid black',



                        },
                        border: '1px solid black',

                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon color='secondary' />}
                        aria-controls="panel1a-content"

                        id="panel1a-header"

                        sx={{
                            fontSize: '50px',
                            '&.Mui-expanded': {
                                background: '#fff',

                            },
                        }} >
                        <Typography sx={{
                            color: 'black',
                            fontFamily: 'sans-serif',
                            fontWeight:'700',
                            fontSize: '16px',
                        }}
                        >
                            {question}</Typography>
                    </AccordionSummary>

                    <AccordionDetails >
                        <div
                            style={{
                                color: 'black',
                                fontFamily: 'sans-serif',
                                fontSize: '14px',
                                fontWeight: '600',
                                padding:'12px',
                            }}
                        className='flex flex-col gap-4 bg-green-100'    
                        >
                            <div> {answer}</div>
                            <div className='text-xs font-[500]'> {content}</div>

                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default SyllabusAccord