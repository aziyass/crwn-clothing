import React from "react";
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-Icon/cart-icon";
import DropDownCart from "../cart-dropdown/cart-dropdown";
const Header = ({ currentUser , hidden }) => (
    <div className="header">
        <Link className="logo-container" to='/'> <Logo className='logo' />  </Link>
        <div className="options">
            <Link className="option" to='/shop' > SHOP </Link>
            <Link className="option" to='/contact' > CONTACT </Link>
            {
                currentUser ?
                    (<div className="option" onClick={() => auth.signOut()} >
                        Sign out
                    </div>)
                    :
                    (<Link className="option" to='/signin'> Sign in </Link>)
            }    
            <CartIcon />       
        </div>
        {
            hidden ? null : <DropDownCart /> 
        }
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser, hidden
})
export default connect(mapStateToProps)(Header) 