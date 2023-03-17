
import React, { Component } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

class AlternateTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = { steps: props.steps};
  }
  
  render() {
    return (
      <Timeline position="alternate">
          {this.state.steps.map((step, index) => (
            <TimelineItem key={step.label}>
              {index === this.state.steps.length - 1 ? 
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
                <div className='d-inline-flex text-color border rounded bg-gradient p-1 mw-60'>
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
                <div className='d-inline-flex text-color border rounded bg-gradient p-1 mw-60'>
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
}
export default AlternateTimeline;