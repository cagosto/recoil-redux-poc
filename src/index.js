import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { RecoilRoot } from 'recoil';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const rootReducer = reducer;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
