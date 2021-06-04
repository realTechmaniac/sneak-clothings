import './App.css';
import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shoppage/Shopepage'
import { Route , Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import SignUpAndSignIn from './pages/Signin-Signup/Signin-Signup'
import { auth }  from '../src/firebase/firebase.utils'
import React, { Component } from 'react';

class App extends Component{

    constructor(props){

        super(props)

        this.state = {

           currentUser : null

        }
    }

    unsubscribeFromAuth = null

    componentDidMount(){

        this.unsubscribeFromAuth  = auth.onAuthStateChanged((user) => {

            this.setState({currentUser : user})

            console.log(user)

        })  

    }


    componentWillUnmount(){

        this.unsubscribeFromAuth()

    }

    render(){

      return (

        <div>
          
          <Header currentUser = {this.state.currentUser}/>
    
          <Switch>
    
            
              <Route   exact path= '/' component = {Homepage}/>
    
              <Route  path= '/shop' component = {ShopPage}/>
    
              <Route  path= '/signin' component = {SignUpAndSignIn}/>
              
    
          </Switch>
        
        </div>
    
      );

    }


}


export default App;
