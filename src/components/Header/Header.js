import React from 'react'
import classes from './Header.module.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo } from '../../assets/crown.svg'
import {auth } from '../../firebase/firebase.utils'

const header = ({currentUser}) => (

    <div className = {classes.Header}>

        <Link to = "/" className = {classes.LogoContainer}>

            <Logo className = {classes.Logo}/>

        </Link>

        <div className = {classes.Options}>

            <Link to ="/shop" className = {classes.Option}>SHOP</Link>

            <Link to ="/contact" className= {classes.Option}>CONTACT</Link>

            {

                currentUser ?  <div className = {classes.Option} onClick = {() => auth.signOut()}>SIGN OUT</div>

                :

                <Link className = {classes.Option} to = '/signin'>SIGN IN</Link>

            }

        </div>

    </div>

)




export default header