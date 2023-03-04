import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const steps = [
    {
      label: 'C++',
      description: `30 projects`,
    },
    {
      label: 'C# .Net console',
      description: '30 projects',
    },
    {
      label: 'C# .Net WinForms',
      description: '30 projects',
    },
    {
      label: 'C# .Net WPF',
      description: '30 projects',
    },
    {
      label: 'C# ASP.NET Core',
      description: '30 projects',
    },
    {
      label: 'JavaScript',
      description: '30 projects',
    },
    {
      label: 'Java',
      description: '30 projects',
    },
    {
      label: 'PHP',
      description: '30 projects',
    },
  ];

export default function AlternateTimeline() {
  return (
    <Timeline position="alternate">
        {steps.map((step, index) => (
          <TimelineItem key={step.label}>
            {index === steps.length - 1 ? 
            <TimelineSeparator>
                <TimelineDot />
            </TimelineSeparator> 
            : 
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>}
            
            <TimelineContent className='text-color'>{step.label}
                <div>
                    {step.description}
                </div>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
}