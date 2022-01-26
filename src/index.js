import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './redux/reducers';
import mySaga from './redux/sagas';

import App from './App';


const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
