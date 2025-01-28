import logo from './logo.svg';
import './App.css';
import React from 'react';
import Saudacao from './components/Saudacao';

function App() {
    return (
      <div>
        <Saudacao nome="João" />
        <Saudacao nome="Maria" />
        <Saudacao nome="Visitante" />
      </div>
    );
};

export default App;
