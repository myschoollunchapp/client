import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  _handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <button
          onClick={this._handleIncrement}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
