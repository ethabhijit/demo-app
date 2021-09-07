import React from 'react';
import ReactDOM from 'react-dom';
import { FacebookProvider } from 'react-facebook';
import { FACEBOOK_APP_ID } from './backend';
import Routes from './Routes';

ReactDOM.render(
  <FacebookProvider appId={FACEBOOK_APP_ID}>
    <Routes />
  </FacebookProvider>,
  document.getElementById('root')
);

