import React, { Component } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


class LineRight extends Component {
  constructor(props) {
    super(props);
    this.state = { step: props.step};
  }
  
  render() {
    return (
        <div className='d-inline-flex text-color border rounded bg-gradient p-1 mw-60 language-right'>
            <div className='d-flex flex-wrap flex-row-reverse align-items-center'>
                {this.state.step.technologies.map((technology) => (
                <div key={technology} className='bg-dark opacity-50 rounded p-1 m-2'>
                    {technology}
                </div>
                ))}
            </div>
            <div className='mx-3'>
                <div className='text-nowrap'>
                    {this.state.step.label}
                </div>
                <div className='text-gray text-nowrap'>
                    {this.state.step.description}
                </div>
                <a href={this.state.step.url} target="_blank" rel="noreferrer">link</a>
            </div>
        </div>
    );
  }

  
}
export default LineRight;