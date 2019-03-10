import { GET_USERS_SUCCESS, USERS_ERROR } from '../actions/usersActions';

const initialState = {
  items: [],
  error: ''
};

export default function users(state = initialState, action) {
  switch(action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload
      }
    case USERS_ERROR:
      return {
        ...state,
        error: action.payload.errors
      }
    default:
      return state;

  }
}