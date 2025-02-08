import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import '../src/styles/index.module.css';
import "./i18next";

const root = document.getElementById('root'); 

if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(<App />);
} else {
  console.error('Elemento com id "root" não encontrado!');
}