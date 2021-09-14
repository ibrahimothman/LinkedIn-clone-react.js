import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserContextProvider } from './store/UserContext'


ReactDOM.render(
  <UserContextProvider>
      <App />
  </UserContextProvider>,
  document.getElementById('root')
);

