import React, { Component } from "react";
import PagesHome from "../pages/home";
import PagesAbout from "../pages/about";
import PagesContactUs from "../pages/contactUs";
import PagesTerms from "../pages/terms";
import PagesProducts from "../pages/products";

class LayoutBody extends Component {
  // state = {
  //   counter: "aa"
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoading: true, //https://www.youtube.com/watch?v=VwiZBveJhq4&t=72s
  //     conctacts: []
  //   };
  // }

  // componentDidMount() {
  //   console.log("counter " +this.counter);

  //   console.log("isLoading " + this.isLoading);

  //   // this._fecthData();
  // }
  // componentWillUnmount() {

  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.value !== this.props.value) {
  //     // ajax call, get more data
  //   }
  // }
  render() {
    return (
      <div className="container-fluid">
        <PagesHome />
        <hr />
        <PagesAbout />
        <hr />
        <PagesProducts />
        <hr />
        <PagesContactUs />
        <hr />
        <PagesTerms />
      </div>
    );
  }
}

export default LayoutBody;
