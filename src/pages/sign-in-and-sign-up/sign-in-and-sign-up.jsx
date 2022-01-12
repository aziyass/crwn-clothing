import React from "react";
import './sign-in-and-sign-up.scss'
import Signin from "../../component/sign-in/sign-in";
import SignUp from "../../component/sign-up/sign_up";
const Signinup=()=> (
    <div className="sign-in-sign-up">
        <Signin /> 
        <SignUp /> 
    </div>
)
export default Signinup