import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Aircnc"/>
      <div className="content">
        <p>Ofereça <strong>sports</strong> para progrmadores e encontre <strong>talentos</strong> para sua empresa</p>

        <form action="">
          <label htmlFor="email">EMAIL *</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Seu melhor e-mail"
          />
          <button type="submit" className="btn">Entrar</button>
          </form>
      </div>
    </div>
  );
}

export default App;
