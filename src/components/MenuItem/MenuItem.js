import React from 'react'
import classes from './MenuItem.module.scss'
import {withRouter} from 'react-router-dom'
const menuItem = ({title , imageUrl, size, linkUrl, history, match}) => {
    
    let divclasses = [classes.MenuItem]

    if (size){

        divclasses = [classes.MenuItem , classes.Large]

    }

    return(

        <div  className = {divclasses.join(' ')} >

            <div className ={classes.BackgroundImage} style = {{backgroundImage:  `url(${imageUrl})`}}  onClick = {() => history.push(`${match.url}${linkUrl}`)}>
  
            </div>

            <div className = {classes.Content}>

                <h1 className= {classes.Title}>{title.toUpperCase()}</h1>

                <span className = {classes.Subtitle}>SHOP NOW</span>

            </div>

        </div>
    )

}

   



   


export default withRouter(menuItem)