import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloWorld';
import 'bootstrap/less/bootstrap.less'


const node1 = document.getElementById('app');

if (node1) {
  ReactDOM.render( <HelloWorld/>, node1);
}