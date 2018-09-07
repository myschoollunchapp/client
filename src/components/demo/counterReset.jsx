import React, { Component } from "react";

class CounterReset extends Component {
  state = {
    value: this.props.counter.value
  };

  render() {
    return (
      <div>
        {/* {this.props.children} */}

        <h1>CounterReset: {this.props.counter.id}</h1>

        <span>{this.state.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm"
        >
          {" "}
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          {" "}
          Delete
        </button>
      </div>
    );
  }
}

export default CounterReset;
