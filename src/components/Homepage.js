import React from 'react'
import classes from './Homepage.module.scss'


const homepage = (props) => (

    <div className = {classes.Homepage}>

        <div className = {classes.DirectoryMenu}>

            {/* Item 1 */}

            <div  className = {classes.MenuItem}>

                 <div className = {classes.Content}>

                     <h1 className= {classes.Title}>HATS</h1>

                     <span className = {classes.Subtitle}>SHOP NOW</span>

                 </div>

            </div>

             {/* Item 2*/}

            <div  className = {classes.MenuItem}>

                 <div className = {classes.Content}>

                     <h1 className= {classes.Title}>JACKETS</h1>

                     <span className = {classes.Subtitle}>SHOP NOW</span>

                 </div>

            </div>

             {/* Item 3*/}
             
            <div  className = {classes.MenuItem}>

                 <div className = {classes.Content}>

                     <h1 className= {classes.Title}>SNEAKERS</h1>

                     <span className = {classes.Subtitle}>SHOP NOW</span>

                 </div>

            </div>

             {/* Item 4*/}
             
            <div  className = {classes.MenuItem}>

                 <div className = {classes.Content}>

                     <h1 className= {classes.Title}>WOMEN</h1>

                     <span className = {classes.Subtitle}>SHOP NOW</span>

                 </div>

            </div>

            {/* Item 5*/}
             
            <div  className = {classes.MenuItem}>

                 <div className = {classes.Content}>

                     <h1 className= {classes.Title}>MEN</h1>

                     <span className = {classes.Subtitle}>SHOP NOW</span>

                 </div>

            </div>


        </div>

    </div>
)



export default homepage