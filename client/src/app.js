import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import './custom.css';
import MainContainer from './components/mainContainer';
import Hello from './helloComponent';

const node1 = document.getElementById('app');

const h1Style = {
  color: '#ffffff'
};

if (node1) {
  ReactDOM.render( <h1 style={h1Style}>DEMO</h1>, node1);
}