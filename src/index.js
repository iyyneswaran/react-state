import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavouriteColor from './components/FavouriteColor';
import Car from './components/car';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FavouriteColor />
    <Car />
  </React.StrictMode>
);

reportWebVitals();