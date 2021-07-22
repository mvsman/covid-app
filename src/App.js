import axios from 'axios';
import {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
// import Data from './components/Data'
import Header from './components/Header';
import Nav from './components/Nav';
import Description from './pages/Description';
import Country from './pages/Country';
import World from './pages/World';

import './App.css';

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    const API = `https://covid-api.mmediagroup.fr/v1/cases`
    axios.get(API).then(({data}) => {
      setState(data)
    })
  }, [])
  const array = Object.values(state).map((el) => el.All);

  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="container">
        <div className="page">
          <Route path="/" render={() => <Description items={array} />} exact />
          <Route path="/world" render={() => <World items={array} />} exact />
          <Route path="/country" render={() => <Country items={array} />} exact />
          {/* <Data items={state} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
