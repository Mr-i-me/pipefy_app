/* globals PipefyApp */
import React from "react";
import { render } from "react-dom";
import Form from "./form";

const pipefy = PipefyApp.init();

class ReactSample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pipe: null, card: null };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    PipefyApp.render(() => {
      pipefy.pipe().then(pipe => {
        this.setState({ pipe });
      });
    });
  }

  handleChange({ event }) {
    const {
      target: { value }
    } = event;
    console.log("value", value);
    const { card } = this.state;

    this.setState({ card: value });

    console.log("this.state", this.state);
  }
  handleSubmit() {
    const { cardId } = this.state;
    pipefy.openCard(cardId);
  }


  render() {
    return (
      <div>
        {this.state.pipe && (
          <div>
            <h1>Solicitação Bacen</h1>
            <h4>esteira: {this.state.pipe.name}</h4>
            <h3>Pipe: {this.state.pipe.name}</h3>
            <div>
              <Form pipefy={pipefy} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

render(<ReactSample />, document.getElementById("application"));
