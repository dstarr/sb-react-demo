import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import './custom.css';
import MainContainer from './components/mainContainer';
import Hello from './helloComponent';

const node1 = document.getElementById('app');

if (node1) {
  ReactDOM.render( <Hello />, node1);
}