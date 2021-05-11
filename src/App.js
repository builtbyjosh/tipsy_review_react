import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import BreweriesList from './components/BreweriesList'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/breweries' component={BreweriesList} />
      </Switch>
      
    </div>
  );
}

export default App;
