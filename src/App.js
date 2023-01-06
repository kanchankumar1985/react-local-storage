import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import useLocalStorage from './localStorage';

function App() {
  const [storageText , setStorageText] = useLocalStorage('name' , '');


  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={storageText} onChange={(e) => setStorageText(e.target.value)}/>
      </header>
    </div>
  );
}

export default App;
