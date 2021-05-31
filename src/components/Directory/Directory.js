import React, {Component} from 'react'
import MenuItem from '../MenuItem/MenuItem'
import classes from './Directory.module.scss'

class Directory extends Component {

    //The state holds items for each MENU--->

    state = {

        sections : [

            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
    
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
    
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
    
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            }
        ]
    }


    //Object Destructuring was used below to Obtain the section PROPS-->

    render () {

        return (

            <div className = {classes.DirectoryMenu}>

                { this.state.sections.map( ({ title, imageUrl, id, size}) => (

                     <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size= {size}/>

                ))}

            </div>
        )
    }

        

}


export default Directory
