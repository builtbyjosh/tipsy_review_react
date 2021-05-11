import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import BreweriesList from './components/BreweriesList'
import BreweryDetails from './components/BreweryDetails';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/breweries' component={BreweriesList} />
        <Route exact path='/breweries/:id' component={BreweryDetails} />
      </Switch>
      
    </div>
  );
}

export default App;

// import React, { Component } from 'react';

// class App extends Component {

//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/breweries' component={BreweriesList} />
//           <Route exact path='/breweries/:id' component={BreweryDetails} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;

