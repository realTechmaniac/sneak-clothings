 import React from 'react'
 import classes from './CustomButton.module.scss'



 const customButton  = ({isGoogleSignIn, children, click,  type, ...otherProps}) => {

    let buttonClass = [classes.CustomButton]

    if(isGoogleSignIn){

        buttonClass = [classes.CustomButton , classes.GoogleSignin]

    }

    return(
        
        <button className = {buttonClass.join(' ')} onClick ={click} >

            {children}

        </button>

    )

}


export default customButton






