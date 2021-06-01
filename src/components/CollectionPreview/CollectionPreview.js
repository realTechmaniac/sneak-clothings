import React from 'react'
import classes from './CollectionPreview.module.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const collectionPreview = ({title,items}) => (

    <div className = {classes.CollectionPreview}>

        <h1 className = {classes.Title}>{title.toUpperCase()}</h1>

        <div className= {classes.Preview}>

            {
                 items.filter((items, idx) => idx < 4 ).map(({id, ...otherItemProps}) => (

                     <CollectionItem key = {id} {...otherItemProps}/>

                     
                 ))
        
            }
           
        </div>

    </div>
)


export default collectionPreview