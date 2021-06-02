import React from 'react'
import classes from './Header.module.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo } from '../../assets/crown.svg'

const header = () => (

    <div className = {classes.Header}>

        <Link to = "/" className = {classes.LogoContainer}>

            <Logo className = {classes.Logo}/>

        </Link>

        <div className = {classes.Options}>

            <Link to ="/shop" className = {classes.Option}>SHOP</Link>

            <Link to ="/contact" className= {classes.Option}>CONTACT</Link>

        </div>

    </div>

)




export default header