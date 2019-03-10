export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const USERS_ERROR = 'USERS_ERROR';

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST
  }
}

export const getUsersSuccess = (items) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: items
  }
}

export const createUserRequest = (firstName, lastName) => {
  return {
    type: CREATE_USER_REQUEST,
    payload: {
      firstName,
      lastName
    }
  }
}

export const deleteUserRequest = (userId) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: userId
  }
}

export const usersError = (error) => {
  return {
    type: USERS_ERROR,
    payload: error
  }
}