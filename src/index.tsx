import 'regenerator-runtime/runtime'
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';


import App from './App';
import * as serviceWorker from './serviceWorker';

import  { AppContextProvider } from '~/context/App.context'


ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
