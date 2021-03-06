import React from 'react';
import ReactDOM from 'react-dom';
import '../src/GlobalStyle/index.css';
import App from '../src/Container/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
