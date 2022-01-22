import React from 'react';
import Homepage from './pages/homepage/homepage';
import './App.css'
import Shop from './pages/shop/shop';
import Header from './component/header/header';
import Signinup from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { BrowserRouter as Router
   , Switch 
   , Route 
   , Redirect
   } from 'react-router-dom'
import { auth , createuserprofile } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { SetCurrentUser } from './redux/user/user.action'
class App extends React.Component{

  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async(userAuth) => {
      const {SetCurrentUser} = this.props
      if(userAuth){
       const userRef = await createuserprofile(userAuth)
        userRef.onSnapshot(snapshot=> {
        SetCurrentUser({
          id:snapshot.id,
          ...snapshot.data()
        })
      })
      }
      SetCurrentUser(userAuth)
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
        <Header currentUser= {this.props.currentUser} /> 
           <Switch> 
             <Route exact path='/' component={Homepage}  /> 
             <Route path='/shop' component={Shop}  /> 
             <Route exact path='/signin' 
             render={()=> this.props.currentUser ? <Redirect to='/' /> : <Signinup/> }/> 
           </Switch>
        </div>
      </Router>     
    </div>
  )
  }
}
const mapStateToProps=(user)=> ({
  currentUser:user.currentUser  
})
const mapDispatchToProps=dispatch=> ({
  SetCurrentUser:user=> dispatch(SetCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);