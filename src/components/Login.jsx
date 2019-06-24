import React from "react";
export class Login extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        window.open("/apifetch","_self");

    }

  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Username cannot be empty.";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Password cannot be empty.";
    }
    //Username and Password is admin
    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match("^admin$")) {
        formIsValid = false;
        errors["username"] = "*Invalid username.";
      }
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match("^admin$")) {
        formIsValid = false;
        errors["password"] = "*Invalid password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div>
      <nav class="navbar navbar-inverse" id="pad">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">Airtel Database Modifier</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">Home</a></li>
            <li><a>Modify Database</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>
      

      <div class="container">
        <div class="container"><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/en/8/8d/Bharti_Airtel_Limited_logo.svg" alt="logo" width="350" height="345"/></div>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
      <label htmlFor="username">Username</label>
      <input id="focusedInput" name="username" type="text" placeholder="Enter your email" value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div>
      <label htmlFor="password">Password</label>
      <input id="focusedInput" name="password" type="password" placeholder="Enter your password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div>
      <button type="submit" class='b'value="Register">Login</button>
      </form >
      </div>
      </div>
    );
  }
}
export default Login;