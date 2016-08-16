import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less'


const node1 = document.getElementById('app');

if (node1) {
  ReactDOM.render( <h2>Hello World!</h2>, node1);
}