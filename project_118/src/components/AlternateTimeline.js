
import React, { Component } from 'react';
import Timeline from '@mui/lab/Timeline';
import Line from "./Line";
import { timelineItemClasses } from '@mui/lab/TimelineItem';

function sleep() {
  return new Promise(resolve => setTimeout(resolve, 200));
}

class AlternateTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = { steps: props.steps, array: [], width: window.innerWidth };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    this.renderData();
  }

  async resize(){
    this.setState({width: window.innerWidth});
  }
  
  render() {
    let width = this.state.width;
    if(width < 1100){
      return (
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}>
            {this.state.array.map((step, index) => 
              <Line key={step.label + width} step={step} index={index} isMobil={true}/>
            )}
        </Timeline>
      );
    }
    else{
      return (
        <Timeline position="alternate">
            
            {this.state.array.map((step, index) => 
              <Line key={step.label + width} step={step} index={index} isMobil={false}/>
            )}
        </Timeline>
      );
    }
  }
  async renderData(){
    window.addEventListener("resize", this.resize);
    let array = [];
    for(let i = 0; i < this.state.steps.length ;i++){
      await sleep();
      array.push(this.state.steps[i]);
      this.setState({array: array});
    }
  }
}
export default AlternateTimeline;