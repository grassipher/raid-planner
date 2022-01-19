import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [raidChoices, setRaidChoices] = useState([]);

    useEffect(() => {
        fetch('./fights').then(res => res.json()).then(data => {
            setRaidChoices(data.raids);
        });
    }, []);

    const raidItems = raidChoices.map((raid) =>
        <li>{raid}</li>
    );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{raidItems}</ul>
      </header>
    </div>
  );
}

export default App;
