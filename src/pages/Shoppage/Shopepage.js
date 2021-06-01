import React, {Component} from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import classes from './Shoppage.module.scss'
import SHOP_DATA from './Shopdata'

class ShopPage extends Component{

    constructor(props){

        super(props);

        this.state = {

            collections : SHOP_DATA

        }
    }   

    render(){

        const {collections} = this.state

        return(

            <div className = {classes.ShopPage}>

                {

                    collections.map(({id, ...otherCollectionProps}) => (

                        <CollectionPreview key = {id} {...otherCollectionProps }/>

                    ))
                }

            </div>
        )
    }
}




export default ShopPage
