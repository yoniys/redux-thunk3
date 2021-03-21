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
    console.log(name1,age,email);
    axios
      .get('http://localhost:3000/')
      .then(response => {
        // response.data is the users
        const users = response.data
        console.log(users);
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
// export const addUser = (name1,age,email) => {
  
//   console.log("name1,age,email",name1,age,email);
//   return (dispatch) => {
//     dispatch(addUsersRequest())
   
//     axios
//       .get('http://localhost:3000/')
//       // ,{name:name1,age:age,email:email})
//       .then(response => {
//         // response.data is the users
//         const users = response.data
//         console.log(users);
//         dispatch(addUsersSuccess(users))
//       })
//       .catch(error => {
//         console.log("eeeeeeeeee");
//         // error.message is the error message
//         dispatch(addUsersFailure(error.message))
//       })
//   }
// }

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  console.log("eeeeeeeeeeeeeeeeeeee");
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
    console.log("eeeeeeeeeeeeeeeeeeee");
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

