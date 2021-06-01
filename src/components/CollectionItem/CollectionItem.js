import React from 'react'
import classes from './CollectionItem.module.scss'

const collectionItem = ({ id, name, price, imageUrl}) => (

    <div className = {classes.CollectionItem}>

            <div className = {classes.Image} style = {{ backgroundImage : `url(${imageUrl})`}}>
            
            </div>

            <div className = {classes.CollectionFooter}>

                <span className = {classes.Name}>{name}</span>

                <span className = {classes.Price}>{price}</span>

            </div>

    </div>
)



export default collectionItem
