 import React from 'react'
 import classes from './CustomButton.module.scss'



 const customButton  = (props) => (

    <button className = {classes.CustomButton} type = {props.buttonType} >

        {props.children}

    </button>

 )


export default customButton






