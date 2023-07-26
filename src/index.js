import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import reducer from './reducers';
import App from '.components/App';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers';

const store = createStore(reducers)

ReactDOM.createRoot(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
reportWebVitals();


// ReactDOM.createRoot(document.getElementById('root'));
// reportWebVitals();
