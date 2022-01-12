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
import { auth , createuserprofile } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser:''
    }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async(userAuth) => {
      if(userAuth){
       const userRef = await createuserprofile(userAuth)
        userRef.onSnapshot(snapshot=> {
        this.setState({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        },()=> {console.log(this.state);})
      })
      
      }
      this.setState({currentUser:userAuth})
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
