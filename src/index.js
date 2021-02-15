import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updatenewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter >
            <App 
              state={state} 
              addPost={addPost}
              updatenewPostText={updatenewPostText} />
          </BrowserRouter>  
        </React.StrictMode>,
        document.getElementById('root')
      );
}
// addPost('JS')

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
