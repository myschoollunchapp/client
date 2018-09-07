import React, { Component } from "react";

class LayoutHeader extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">
                Sign out
              </a>
            </li>
          </ul> */}
        </nav>
      </div>
    );
  }
}

export default LayoutHeader;
