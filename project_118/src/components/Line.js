import React, { Component } from 'react';
import LineLeft from "./LineLeft";
import LineRight from "./LineRight";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function sleep() {
  return new Promise(resolve => setTimeout(resolve, 100));
}

class Line extends Component {
  constructor(props) {
    super(props);
    this.state = { step: props.step, index: props.index, opacity: 0, isMobil: props.isMobil};
  }
  
  
  componentDidMount() {
    this.renderData();
  }
  render() {
    return(
      <TimelineItem  style={{opacity:this.state.opacity}}>
        <TimelineSeparator>
            {this.state.index === 0?(<TimelineDot className='mt-auto' />):(<><TimelineConnector /><TimelineDot/></>)}
        </TimelineSeparator>
        <TimelineContent>
          {this.state.isMobil?
            (<LineLeft step={this.state.step}/>)
            :
            (this.state.index % 2 === 0?(<LineLeft step={this.state.step}/>):(<LineRight step={this.state.step}/>))
          }
        </TimelineContent>
      </TimelineItem>
    );
  }
  
  async renderData(){
    for(let i = 0; i < 10 ;i++){
      await sleep();
      this.setState({opacity: this.state.opacity + 0.1});
    }
  }
  
}
export default Line;