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
      description: `27 projects`,
      technologies: [],
    },
    {
      label: 'C# .Net console',
      description: '15 projects',
      technologies: ['AWS'],
    },
    {
      label: 'C# .Net WinForms',
      description: '14 projects',
      technologies: ['MVC', 'MS SQL', 'Telegram'],
    },
    {
      label: 'C# .Net WPF',
      description: '34 projects',
      technologies: ['MVVM', 'MS SQL', 'Entity Framework', 'EntityFrameworkCore', 'Azure.Storage', 'Binance.Net', 'ScottPlot'],
    },
    {
      label: 'C# ASP.NET Core',
      description: '10 projects',
      technologies: ['MS SQL', 'Entity Framework Core'],
    },
    {
      label: 'JavaScript',
      description: '22 projects',
      technologies: [`HTML`, `CSS`, `SASS`, 'Bootstrap', 'jQuery'],
    },
    {
      label: 'React',
      description: '6 projects',
      technologies: [`HTML`, `CSS`, 'Bootstrap', 'Victory', 'Material UI'],
    },
    {
      label: 'Java',
      description: '5 projects',
      technologies: ['MS SQL', 'Hibernate', 'Spring'],
    },
    {
      label: 'PHP',
      description: '9 projects',
      technologies: ['MS SQL', `HTML`, `CSS`, 'Bootstrap'],
    },
    {
      label: 'SQL',
      description: '30+ projects',
      technologies: ['MySQL', 'MS SQL'],
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
            
            <TimelineContent>
            {index % 2 === 0 ? 
              <div className='d-inline-flex text-color border rounded bg-gradient p-1'>
                <div className='mx-3'>
                  <div className='text-nowrap'>
                    {step.label}
                  </div>
                  <div className='text-gray'>
                    {step.description}
                  </div>
                </div>
                <div className='d-inline-flex flex-wrap'>
                  {step.technologies.map((technology) => (
                    <div className='bg-dark opacity-50 rounded p-1 m-2'>
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
              :
              <div className='d-inline-flex text-color border rounded bg-gradient p-1 mw-70'>
                <div className='d-inline-flex flex-wrap flex-row-reverse'>
                  {step.technologies.map((technology) => (
                    <div className='bg-dark opacity-50 rounded p-1 m-2'>
                      {technology}
                    </div>
                  ))}
                </div>
                <div className='mx-3'>
                  <div className='text-nowrap'>
                    {step.label}
                  </div>
                  <div className='text-gray'>
                    {step.description}
                  </div>
                </div>
              </div>}
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
}