import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import Layout from './components/Layout';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Layout>

        </Layout>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);