import React, {Component} from 'react'
import classes from './Signin.module.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {signInWithGoogle} from '../../../src/firebase/firebase.utils'

class Signin extends Component {

    state = {

        email    : '',

        password : ''

    }


    submitHandler  = (event) => {

        event.preventDefault()

        this.setState({email:'', password:''})

    }

    inputChangeHandler = (event) => {

         const {name , value} = event.target

         this.setState({[name] : value})
    }

    render(){

        return(
            
            <div className = {classes.Signin}>

               <h2 >I already have an account </h2> 

               <span className = {classes.Title}>Sign in with your email and password</span>

               <form onSubmit = {this.submitHandler}>

                   <FormInput name ='email' 

                        label ='email'
                        value= {this.state.email}
                        ChangeHandler = {this.inputChangeHandler} 
                        type ='email' required />

                    <FormInput name ='password' 

                        label ='password'
                        value= {this.state.password}
                        ChangeHandler = {this.inputChangeHandler} 
                        type ='password' required />
                    
                    <div className = {classes.Buttons}>

                        <CustomButton btnType = 'submit'>Submit Form</CustomButton>

                        <CustomButton click = {signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>

                    </div>
        
               </form>

            </div>
        ) 
    }

}



export default Signin