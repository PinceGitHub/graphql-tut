import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();

    this.props.handleOnSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.handleOnSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={(e) =>
                this.setState({
                  email: e.target.value,
                  password: this.state.password,
                })
              }
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={(e) =>
                this.setState({
                  password: e.target.value,
                  email: this.state.email,
                })
              }
            />
          </div>
          <div style={{ color: "red" }}>
            {this.props.errors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
