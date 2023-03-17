import React, { Component } from 'react';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { dataTime:"",  value: "Select date" };
    this.change = this.change.bind(this);
    this.send = this.send.bind(this);
  }

  async send(value){
    var result = await fetch("http://localhost:8080/postMoonPhase?date="+ value, { method: "POST" });
    let data = await result.text();
    this.setState({ value: data });
  }

  change(event){
    this.send(event.target.value);
  }

  render() {
    return (
      <div className='d-flex justify-content-center  align-items-center vh-100'>
        <div className='d-flex flex-column align-items-center border shadow p-5'>
          <h3>{this.state.value}</h3>
          <div className='d-flex'>
            <div className="input-group m-3">
              <span className="input-group-text">Date:</span>
              <input type={'datetime-local'} onChange={this.change}></input>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
