import './App.css';
import Homepage from './pages/Homepage/Homepage'
import { Route , Switch } from 'react-router-dom'


const Hatspage = () => (

    <div>

        <h1>Hats</h1>
        
    </div>
)

function App() {

  return (

    <div>
      
      <Switch>

          <Route  path= '/hats' component = {Hatspage}/>
          
          <Route  path= '/' component = {Homepage}/>

      </Switch>
     
    </div>

  );

}

export default App;
