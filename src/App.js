import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/registered';
import Products from './Pages/Products';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </header>
      
    </div>
  );
}

export default App;
