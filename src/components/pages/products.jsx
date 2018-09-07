import React, { Component } from "react";
import PartsProductPricing from "../parts/product/pricing";
import PartsProductCheckout from "../parts/product/checkout";

class PagesProducts extends Component {
  state = {};
  render() {
    return (
      <div>
        <PartsProductPricing />
        <hr />
        <PartsProductCheckout />
      </div>
    );
  }
}

export default PagesProducts;
