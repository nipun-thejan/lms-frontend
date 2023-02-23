import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css';

import App from './App';
import { AppProvider } from './context/appContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
