import axios from 'axios';
import {useState, useEffect} from 'react';
import Data from './components/qwe/data'

import './App.css';

function App() {
  const [state, setState] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const API = `https://covid-api.mmediagroup.fr/v1/cases`
    axios.get(API).then(({data}) => {
      setState(data)
    })
  }, [])

  if(inputValue) {
    
  }

  return (
    <div className="App">
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <Data items={state} />
    </div>
  );
}

export default App;
