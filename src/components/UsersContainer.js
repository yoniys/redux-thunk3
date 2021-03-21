import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function UsersContainer ({ userData, fetchUsers }) {
  let i=0
  useEffect(() => {
    fetchUsers()
  }, [])
  if(userData.users.length>0&&i==0){
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
  )}else{return(<h1>loading</h1>)}
}
  




const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
   
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)

