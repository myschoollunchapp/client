import React, { Component } from "react";
import "./App.css";
import LayoutHeader from "./components/layout/header";
import LayoutFooter from "./components/layout/footer";
import LayoutBody from "./components/layout/body";
import config from 'react-global-configuration';
import index from './config/index'

if (config.get('apiDomain')) {
  //LayoutBody(config.get('apiDomain'));
} 
class App extends Component {
  componentDidMount() {
    // this._fecthData();
    // console.log ( )


  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      // ajax call, get more data
    }
  }
  render() {

    return (
      <div className="container-fluid">


        <LayoutHeader />
        <LayoutBody />
        <LayoutFooter />
      </div>
    );
  }
}

export default App;
