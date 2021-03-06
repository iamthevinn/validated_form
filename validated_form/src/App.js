import React, { Component } from 'react';
import logo from './logo.svg';
import './App1.css';

class NameAndEmail extends React.Component {

  isValidEmail(emailAddress) {
    if (emailAddress.length === 0)
      return true;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress.toLowerCase());
  }

  render() {
    let nameValidation = null
    let emailValidation = null
    if (this.props.name.length > 0 && this.props.name.length < 8)
      nameValidation = <label className="labelStyle"> Name isn't long enough</label>
    if (!this.isValidEmail(this.props.email))
      emailValidation = <label style={{color: "red"}}> Email isn't valid. Must include @ and .com</label>
    let disabled = true;
    if (nameValidation === null && emailValidation === null && this.props.email.length !== 0 && this.props.name.length !== 0)
      disabled = false;
      return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            <input placeholder="Name" type="text" value={this.props.name} onChange={this.props.handleNameChange} />
            {nameValidation}
          </label>
          <br />
          <br />
          <label>
            <input type="text" placeholder="Email" value={this.props.email} onChange={this.props.handleEmailChange} />
            {emailValidation}
          </label>
          <br />
          <br />
          <input disabled={disabled}type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', submitted: false};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitted = false;
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
    console.log("email change")
  }

  handleSubmit(event) {
    console.log("submit")
    this.setState({submitted: true});
    event.preventDefault();
  }
  


  render() {
    let output = <NameAndEmail name={this.state.name} email={this.state.email} handleNameChange={this.handleNameChange} handleEmailChange={this.handleEmailChange} handleSubmit={this.handleSubmit}/>
    if (this.state.submitted)
       output = "Thanks. Your form was submitted"
    return (
    <div>
    <div style={{fontSize: '48px'}}>Validated Form</div>
    <br />
      {output}
    </div>
    );
  }
}

export default App;
