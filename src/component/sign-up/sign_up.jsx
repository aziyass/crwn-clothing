import React from "react";
import Forminput from "../form-input/form-input";
import CostumeButton from "../CostumeBotton/CostumeBotton";
import { auth , createuserprofile } from "../../firebase/firebase.utils";
import './sign_up.scss'
 
class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        }
    }

    handelSubmit=(event)=> {
        event.preventdefault()
        const {displayName,email,password,confirmpassword} = this.state
        if(password!==confirmpassword){
            alert('verify password')
            return
        }
        try{
            const {user} =  auth().createUserWithEmailAndPassword(email,password)
             createuserprofile(user,{displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmpassword:''
            })
            console.log(user)
        }catch(error){
            console.error(error);
        }
    }
    handelChange=(event)=>{
        const {name,value} = event.target;
        this.setState({ [name] : value })
    } 


    render(){
        const {displayName,email,password,confirmpassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title"> i do not have an account </h2>
                <span> sign up with email and password </span>
                <form className="sign-up-form" onSubmit={this.handelSubmit} >
                    <Forminput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handelChange}
                        label='name'
                        required
                    />
                    <Forminput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handelChange}
                        label='email'
                        required
                    /> 
                    <Forminput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handelChange}
                        label='password'
                        required
                    /> 
                    <Forminput 
                        type='password'
                        name='confirmpassword'
                        value={confirmpassword}
                        onChange={this.handelChange}
                        label='confirme password'
                        required
                    />  
                    <CostumeButton type="submit"> sign up </CostumeButton> 
                </form>
            </div>
        )
    }
}
export default SignUp