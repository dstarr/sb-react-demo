import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';

import MainContainer from './components/mainContainer';

// import Hello from './components/hello';

const node1 = document.getElementById('app');

if (node1) {
  ReactDOM.render( <MainContainer />, node1);
}