import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Results />
    </div>
  );
}

export default App;
