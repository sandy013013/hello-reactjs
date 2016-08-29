import React from 'react';

class Timer extends React.Component{
  constructor(props) {
    // call parent
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      stayedMinutes: 0
    };
  }

  // ticker function, update the stayedMinutes value
  tick() {
    this.setState({stayedMinutes: this.state.stayedMinutes + 1})
  }

  // after dom inserted into document, start the ticker
  componentDidMount() {
    this.tickTask = setInterval(this.tick, 60 * 1000);
  }

  // remove the ticker task after dom removed from document
  componentWillUnmount() {
    clearInterval(this.tickTask);
  }

  render() {
    return (
      <div>
        You have already stay on this page for {this.state.stayedMinutes} minutes
      </div>
    )
  }
}

export default Timer;