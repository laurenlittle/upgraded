import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';

import store from './store/index';
import { fetchJobs } from './features/jobs/jobsSlice';

import App from './component/App';
import reportWebVitals from './reportWebVitals';

store.dispatch(fetchJobs());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
