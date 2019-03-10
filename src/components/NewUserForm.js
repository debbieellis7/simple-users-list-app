import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewUserForm extends Component {

  state = {
    firstName: '',
    lastName: ''
  };

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName } = this.state;

    this.props.onSubmit(firstName, lastName);
    this.setState({
      firstName: '',
      lastName: ''
    })
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input name="firstName" value={firstName} required placeholder="First name" onChange={this.onHandleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input name="lastName" value={lastName} required placeholder="Last name" onChange={this.onHandleChange} />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">Create</Button>
        </FormGroup>
      </Form>
    )
  }
}

export default NewUserForm;