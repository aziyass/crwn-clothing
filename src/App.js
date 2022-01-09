import React from 'react';
import Homepage from './pages/homepage/homepage';
import './App.css'
import Shop from './pages/shop/shop';
import Header from './component/header/header';
import Signinup from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { BrowserRouter as Router
   , Switch 
   , Route 
   } from 'react-router-dom'
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser:''
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser:user})
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
    <div >
      <Router> 
        <div className="App"> 
        <Header currentuser={this.state.currentUser} /> 
           <Switch> 
             <Route exact path='/' component={Homepage}  /> 
             <Route path='/shop' component={Shop}  /> 
             <Route path='/signin' component={Signinup}  /> 
           </Switch>
        </div>
      </Router>     
    </div>
  )
  }
}



export default App;
