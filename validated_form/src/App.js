import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: ''};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
    console.log("email change")
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  isValidEmail(emailAddress) {
    if (emailAddress.length === 0)
      return true;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress.toLowerCase());
  }

  render() {
    let nameValidation = null
    let emailValidation = null
    if (this.state.name.length > 0 && this.state.name.length < 8)
      nameValidation = <label style={{color: "red"}}> Name isn't long enough</label>
    if (!this.isValidEmail(this.state.email))
      emailValidation = <label style={{color: "red"}}> Email isn't valid. Must include @ and .com</label>
    let disabled = true;
    if (nameValidation === null && emailValidation === null && this.state.email.length != 0 && this.state.name.length != 0)
      disabled = false;
      return (
      <div>
        <div style={{fontSize: '48px'}}>Validated Form</div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            {nameValidation}
          </label>
          <br />
          <br />
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
            {emailValidation}
          </label>
          <br />
          <br />
          <input disabled={disabled} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
