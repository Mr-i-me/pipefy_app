/* globals PipefyApp */
import React from 'react';
import { render } from 'react-dom';

const pipefy = PipefyApp.init();

class ReactSample extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { pipe: null };
  }
  componentDidMount() {
    PipefyApp.render(() => {
      pipefy.pipe().then((pipe) => {
        this.setState({ pipe })
      });
    });
  }
  
  render() {
    if (!this.state.pipe) { return <div /> };
    return <h1>Hello from React on Pipe: {this.state.pipe.name}</h1>
  }
}


render(<ReactSample />, document.getElementById('application'));