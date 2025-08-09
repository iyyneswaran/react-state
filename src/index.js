import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavouriteColor from './components/FavouriteColor';
import Car from './components/car';
import Scooter from './components/Scooter';
import List from './components/List';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <FavouriteColor />
    <Car />
    <Scooter />
    <List />
  </>
);

reportWebVitals();