import './App.css';
import Homepage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shoppage/Shopepage'
import { Route , Switch } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {

  return (

    <div>
      
      <Header/>
      
      <Switch>

        
          <Route   exact path= '/' component = {Homepage}/>

          <Route  path= '/shop' component = {ShopPage}/>
          

      </Switch>
     
    </div>

  );

}

export default App;
