import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavouriteColor from './components/FavouriteColor';
import Car from './components/car';
import Scooter from './components/Scooter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <FavouriteColor />
    <Car />
    <Scooter />
  </>
);

reportWebVitals();