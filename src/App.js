import React,{useState} from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import CreateServey from './CreateServey';
import TakeServey from './TakeServey';
import Landing from './Landing'

function App() {
  const [flag, setFlag] = useState(0);
  const update=(value)=>{
    setFlag(value)
  }
  return (
    <div className="App">
      <div>
      {(flag===0) && <Landing update={update}/>}
      {flag===2 && <CreateServey/>}
      {flag===1 && <TakeServey/>}
      </div>
    </div>

  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

export default App;
