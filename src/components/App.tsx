import React from 'react';
import './App.css';
import View from './view';
import Navbar from './navbar';
import FooterDetail from './footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <View/>
      <FooterDetail/>
    </div>
  );
}  

export default App;
