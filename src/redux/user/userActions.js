import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USERS_REQUEST,
  ADD_USERS_SUCCESS,
  ADD_USERS_FAILURE
} from './userTypes'

export const fetchUsers = (name1,age,email) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('http://localhost:3000/')
      .then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}



export const addUser = (  name,  age,  email) => {
  return (dispatch, getState) => {
    let data={
      name:name,
      age:age,
      email:email
    }
      axios.post('http://localhost:3000/addUser',data)
      .then(response => {
        const users = response.data
        dispatch(addUsersSuccess(users))
      })
      .catch(error => {
        dispatch(addUsersFailure(error.message))
      })
  
  };
}




export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
  export const addUsersRequest = () => {
    return {
      type: ADD_USERS_REQUEST
    }
  }
  
  export const addUsersSuccess = user => {
    return {
      type: ADD_USERS_SUCCESS,
      payload: user
    }
  }
  
  export const addUsersFailure = error => {
    return {
      type: ADD_USERS_FAILURE,
      payload: error
    }
  }