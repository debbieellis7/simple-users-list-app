import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, usersError } from '../actions/usersActions';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';

class App extends Component {
  componentDidMount () {
    this.props.getUsersRequest();
  };

  handleSubmit = (firstName, lastName) => {
    this.props.createUserRequest(firstName, lastName)
  };

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  };

  onDismiss = () => {
    this.props.usersError('')
  };

  render() {
    const { users, error } = this.props;
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <Alert color="danger" isOpen={!!error} toggle={this.onDismiss}>
          {error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList onDeleteUser={this.handleDeleteUserClick} users={users} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.items,
  error: state.users.error
});

export default connect(mapStateToProps, { getUsersRequest, createUserRequest, deleteUserRequest, usersError })(App);
