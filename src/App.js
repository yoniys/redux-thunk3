import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UsersContainer from './components/UsersContainer'
import SimpleFormExample from './components/adduser'

function App () {
  return (
   
    <Router>
<Switch>


  <Route path="/list">
  <Provider store={store}>
      <div className='App'>
        <UsersContainer />
     
      </div>
    </Provider>
    
  </Route>

  <Route path="/" exact>
  <Provider store={store}>
      <div className='App'>
        <SimpleFormExample />
     
      </div>
    </Provider>
  </Route>


</Switch>
</Router>
    
   
  )
}

export default App


// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       data:data
//     }
//     this.sortBy=this.sortBy.bind(this)
//   }
//   sortBy(key){
// this.setState({
//   data:data.sort((a,b)=> {
//     if(a[key]>b[key]){ 
//       console.log(a[key]);
//     return 1}
//     else{
//       console.log(b[key])
//     return -1}
 
// })
// })
//   }
//   render(){
//   return (
//     <div className="page-container">
//       <UersList />
//       <CoinTable
//       data={this.state.data}
//       sortBy={this.sortBy}
//       />
//     </div>
//   );}
// }