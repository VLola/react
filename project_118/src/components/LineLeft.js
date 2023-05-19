import React, { Component } from 'react';



class LineLeft extends Component {
  constructor(props) {
    super(props);
    this.state = { step: props.step};
  }


  
  render() {
    return (
        <div className='d-inline-flex text-color border rounded bg-gradient p-1 language-left'>
            <div className='mx-3'>
                <div className='text-nowrap'>
                    {this.state.step.label}
                </div>
                <div className='text-gray text-nowrap'>
                    {this.state.step.description}
                </div>
                <a href={this.state.step.url} target="_blank" rel="noreferrer">link</a>
            </div>
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
                {this.state.step.technologies.map((technology) => (
                <div key={technology} className='bg-dark opacity-50 rounded p-1 m-2'>
                    {technology}
                </div>
                ))}
            </div>
        </div>
    );
  }

}
export default LineLeft;