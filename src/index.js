
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//App component will be rendered by the div with root as a classname.
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

