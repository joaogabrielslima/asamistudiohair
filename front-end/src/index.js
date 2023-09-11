import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import AppRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <AppRoutes />
  </React.StrictMode>
);

