import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoToAddUserButton from './bar/GoToAddUser'
import ListButton from './bar/goToList'
import UsersContainer from './components/UsersContainer'
import SimpleFormExample from './components/adduser'

function App () {
  return (
   
    <Router>
<Switch>


  <Route path="/list">
  <Provider store={store}>
      <div className='App'>
      <GoToAddUserButton />
        <UsersContainer />
     
      </div>
    </Provider>
    
  </Route>

  <Route path="/" exact>
  <Provider store={store}>
      <div className='App'>
      <ListButton />
        <SimpleFormExample />
     
      </div>
    </Provider>
  </Route>


</Switch>
</Router>
    
   
  )
}

export default App

