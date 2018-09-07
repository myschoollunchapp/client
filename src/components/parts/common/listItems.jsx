import React, { Component } from "react";

import ListItem from "./listItem";

class ListItem extends Component {
  state = {
    items: ["item1", "item2", "item3", "item4"]
  };

  render() {
    if (this.state.items.length === 0) {
      return null;
    } else {
      return (
        <div>
          {
            <ul>
              {this.state.tags.map(item => (
                // <li key={item}>{item}</li>
                <ListItem />
              ))}
            </ul>
          }
        </div>
      );
    }
  }
}

export default ListItem;
