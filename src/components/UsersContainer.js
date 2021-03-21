import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'
// import { addUser } from '../redux/user/userActions'
///

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
///

function UsersContainer ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
    // addUser()
  }, [])
  
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
       
           <TableContainer component={Paper}>
           <Table  aria-label="simple table">
             <TableHead>
               <TableRow>
                 <TableCell>users</TableCell>
                 <TableCell align="center" > 
                        
                             age
                        </TableCell>
                 <TableCell align="right">email</TableCell>
                
               </TableRow>
             </TableHead>
             <TableBody>
               {userData &&
          userData.users &&
          userData.users.map(user =>
                 <TableRow key={user.name}>
                   <TableCell component="th" scope="row">
                     {user.name}
                   </TableCell>
                   <TableCell align="center">{user.age}</TableCell>
                   <TableCell align="right">{user.email}</TableCell>
                   
                 </TableRow>
               )}
             </TableBody>
           </Table>
         </TableContainer>
          
          
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    //
    // addUser:()=>dispatch(
    //   addUser())
    //
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)

////////
// sortBy(key){
//   this.setState({
//     data:data.sort((a,b)=> {
//       if(a[key]>b[key]){ 
//         console.log(a[key]);
//       return 1}
//       else{
//         console.log(b[key])
//       return -1}
   
//   })
//   })
//     }