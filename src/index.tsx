import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Account from './pages/Account';
import App from './App';
import PrimaryPage from './pages/PrimaryPage';
import Send from './pages/Send';

import StoreProvider from './store/context';

import './index.scss';
import 'antd/dist/antd.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/account" exact component={Account} />
          <Route path="/" exact component={PrimaryPage} />
          <Route path="/send" component={Send} />
        </Switch>
      </App>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
