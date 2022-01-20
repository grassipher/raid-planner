import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`/fights/${raid.id}`}>{raid.name}</Link>
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
