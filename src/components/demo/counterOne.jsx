import React, { Component } from "react";
import Pricing from "../parts/pricing";

class CounterOne extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button
          onClick={ (  ) => this._handleIncrement(this.props)}
          className="btn btn-primary btn-sm"
        >
          {" "}
          Increment
        </button>

        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  _handleIncrement = product=> {
    this.setState({ count: this.state.count + 1 });
    console.log(product )
  };
}

export default CounterOne;
