import React, { Component } from "react";
import $ from "jquery";
import ListItem from "../parts/listItems";
import Counters from "../parts/counters";
class Main extends Component {
  state = {
    count: 0,
    // imageURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3", "tag4"]
  };
  constructor(props) {
    super(props);
    //this._handleClick = this._handleClick.bind(this);

    this.state = {
      isLoading: true, //https://www.youtube.com/watch?v=VwiZBveJhq4&t=72s
      conctacts: []
    };
  }
  componentDidMount() {
    this._fecthData();
  }

  _fecthData() {
    $.ajax({
      url: "https://randomuser.me/api/?results=5",
      dataType: "json",
      success: function(data) {
        // this.jsonData = data;
        this.jdata = data;
        //console.log(data);
      }
    });
  }

  render() {
    const _return = (
      <div className="container">
        <p>----</p>
        <p>----</p>

        <button
          onClick={this._handleClick}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Sign Up
        </button>

        {/* <p>----</p>
        <p>----</p>
        {this._hasData()} */}
      </div>
    );

    return _return;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== thist.props.value) {
      // ajax call, get more data
    }
  }

  _handleClick = product => {
    this.setState({ count: this.state.count + 1 });

    //console.log("clicked", this);
  };

  _doHandleClick = () => {
    this._handleClick({ id: 1 });

    //console.log("clicked", this);
  };

  _hasData() {
    if (this.state.tags.length === 0) {
      return "no data";
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            // <li key={tag}>{tag}</li>

            <ListItem />
          ))}
        </ul>
      );
    }
  }

  _count() {
    const tag = <span>const tag zero</span>;
    const { count } = this.state;

    return count === 0 ? tag : count;
    //return count === 0 ? <span>zero</h1> : count;
    //return count === 0 ? "zero" : count;
  }
}

export default Main;
