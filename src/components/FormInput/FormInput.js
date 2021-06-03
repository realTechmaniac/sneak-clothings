import React from 'react'
import classes from './FormInput.module.scss'

const formInput = ({ChangeHandler, label, ...otherProps}) => {

    let labelClasses = [classes.FormInputLabel]

    if(otherProps.value.length){

        labelClasses = [classes.FormInputLabel, classes.Shrink]

    }

    return(
   
        <div className = {classes.Group}>
            
            <input className = {classes.FormInput} onChange = {ChangeHandler} {...otherProps} />

            {

                label ? <label className = {labelClasses.join(' ')} >{label}</label>  : null
            }

        </div>

    )
}

    


export default formInput