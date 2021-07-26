import {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Description from './pages/Description';
import Country from './pages/Country';
import World from './pages/World';
import requests from './requests'

import './App.css';

const API = `https://covid-api.mmediagroup.fr/v1/cases`

function App() {
  const [cases, setCases] = useState([])

  const getCasesData = async () => 
    await fetch(API)
      .then(res => res.json())
      .then(data => setCases(data))
  
  useEffect(() => {
    getCasesData()
  }, [])

  const array = Object.values(cases).map((el) => el.All);

  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="container">
        <Route path={process.env.PUBLIC_URL + '/'} render={() => <Description items={array} />} exact />
        <Route path={process.env.PUBLIC_URL + '/world'} render={() => <World fetchUrl={requests.fetchConfirmed} fetchUrl2={requests.fetchDeaths} fetchUrl3={requests.fetchRecovered}/>} exact />
        <Route path={process.env.PUBLIC_URL + '/country'} render={() => <Country items={array} />} exact />
      </div>
    </div>
  );
}

export default App;
