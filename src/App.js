import axios from 'axios';
import {useState, useEffect} from 'react';
// import Data from './components/Data'
import Header from './components/Header';
import Nav from './components/Nav';
// import Description from './components/Description';
import World from './components/World';
import Country from './components/Country';

import './App.css';
// import { Route, Router, Switch } from 'react-router-dom';

function App() {
  const [state, setState] = useState([])
  // const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const API = `https://covid-api.mmediagroup.fr/v1/cases`
    axios.get(API).then(({data}) => {
      setState(data)
    })
  }, [])

  // if(inputValue) {
    
  // }

  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="container">
      {/* <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/> */}
        <div className="page">
          {/* <Router>
            <Switch>
              <Route exact path="/" component={<Description items={state} />} />
              <Route exact path="/world" component={<World items={state} />} />
              <Route exact path="/country" component={<Country items={state} /> } />
            </Switch>
          </Router> */}
          {/* <Description items={state} /> */}
          <World items={state} />
          <Country items={state} />
          {/* <Data items={state} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
