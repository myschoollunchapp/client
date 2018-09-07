import React, { Component } from "react";
import Counter from "./counter";
import CounterReset from "./counterReset";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 5 },
      { id: 4, value: 10 }
    ]
  };

  _handleIncrement = counter => {
    const counters = [...this.state.counters]; // ... is a spread operator which  clones the object
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(counters[index].value++)
    this.setState({ counters });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      // ajax call, get more data
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleCompReset} className="btn btn-danger btn-lg">
          {" "}
          Reset
        </button>

        {this.state.counters.map(counter => (
          <CounterReset
            key={counter.id}
            onDelete={this._handleDelete}
            onIncrement={this._handleIncrement}
            counter={counter}
          />
        ))}

        {/*         
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this._handleDelete}
            counter={counter}
          >
           <h4>Counter # {counter.id}</h4>  
          </Counter>
        ))} */}
      </div>
    );
  }

  handleCompReset = () => {
    
console.log('fadfds')
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  _handleDelete = counterId => {
    const newItems = this.state.counters.filter(c => c.id !== counterId);

    this.setState({ counters: newItems });
  };
}

export default Counters;
