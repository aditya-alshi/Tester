import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import { Provider } from 'react-redux'

import App from './App'

import store from './ggwApp/store';
import { fetchlistingThunk } from './ggwApp/listing/lisitngSlice';
store.dispatch(fetchlistingThunk());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)