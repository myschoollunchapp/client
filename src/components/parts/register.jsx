import React, { Component } from "react";
import $ from "jquery";
//import CommonBuildParams from "../../scripts/JSmain";

class PartsRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      address: "",
      address2: "",
      usState: "",
      zipcode: ""
    };
  }

  _onClickSubmit = e => {
    e.preventDefault();
    const s = this.state;
    var items = {
      firstname: s.firstname,
      lastname: s.lastname,
      username: s.username,
      email: s.email,
      address: s.address,
      address2: s.address2,
      usState: s.usState,
      zipcode: s.zipcode
    };

    var data = JSON.stringify(items);
    console.log(data);
    $.post("http://localhost:60769/Home/About?data=" + data);
  };

  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="py-5 text-center">
          <h2>Register</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 order-md-1">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  name="firstname"
                  value={this.state.firstname}
                  onChange={e => this._onChange(e)}
                  className="form-control"
                  placeholder="First name"
                  type="text"
                  maxLength="100"
                  required
                  autoFocus
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  name="lastname"
                  value={this.state.lastname}
                  onChange={e => this._onChange(e)}
                  className="form-control"
                  placeholder="Last name"
                  type="text"
                  maxLength="100"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <input
                  name="username"
                  value={this.state.username}
                  onChange={e => this._onChange(e)}
                  className="form-control"
                  placeholder="Username"
                  type="text"
                  maxLength="100"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                name="email"
                value={this.state.email}
                onChange={e => this._onChange(e)}
                className="form-control"
                placeholder="Email"
                type="email"
                maxLength="100"
                required
              />
            </div>

            <div className="mb-3">
              <input
                name="address"
                value={this.state.address}
                onChange={e => this._onChange(e)}
                className="form-control"
                placeholder="Address"
                type="text"
                maxLength="50"
                required
              />
            </div>

            <div className="mb-3">
              <input
                name="address2"
                value={this.state.address2}
                onChange={e => this._onChange(e)}
                className="form-control"
                placeholder="P.O. Box / Apt #"
                type="text"
                maxLength="50"
              />
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <select
                  name="usState"
                  value={this.state.usState}
                  onChange={e => this._onChange(e)}
                  className="custom-select mr-sm-2"
                  required
                >
                  <option value="">Pick a State...</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <input
                  name="zipcode"
                  value={this.state.zipcode}
                  onChange={e => this._onChange(e)}
                  className="form-control"
                  placeholder="Zip code"
                  type="text"
                  maxLength="50"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={this._onClickSubmit}
          className="btn btn-lg btn-primary btn-block"
        >
          Register
        </button>
      </div>
    );
  }
}

export default PartsRegister;
