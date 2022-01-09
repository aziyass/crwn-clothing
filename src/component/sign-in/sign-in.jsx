import React from "react";
import './sign-in.scss'
import Forminput from "../form-input/form-input";
import CostumeButton from "../CostumeBotton/CostumeBotton";
import { SignInWithGoogle } from "../../firebase/firebase.utils";
class Signin extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handelSubmit=event=> {
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handelChange=event=> {
        const { value , name } =event.target;
        this.setState({ [name] : value })
    }
    render(){
        return(
            <div className="sign-in">
                <h1 className="title">i already have an acount</h1>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <Forminput type="email" name="email" value={this.state.email}
                    onChange={this.handelChange} label="email" required />
                    
                    <Forminput type="password" name="password" value={this.state.password}
                    onChange={this.handelChange} label="password" required />
                    
                    <CostumeButton type="submit" > sign in </CostumeButton>
                    <CostumeButton onClick={SignInWithGoogle}> sign in with google </CostumeButton>
                </form>
            </div>
        )
    }
}
export default Signin