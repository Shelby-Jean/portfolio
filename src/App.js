import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App;