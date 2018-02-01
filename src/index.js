import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore , applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers'

import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducers, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider
    store={store}
    >
    <App />
    </Provider>
, document.getElementById('root'));

registerServiceWorker();
