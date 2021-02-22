import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

console.log(store.getState());

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter >
            <App 
              state={state}
              store={store} 
              dispatch={store.dispatch.bind(store)}
            />
          </BrowserRouter>  
        </React.StrictMode>,
        document.getElementById('root')
      );
}
// addPost('JS')

rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
