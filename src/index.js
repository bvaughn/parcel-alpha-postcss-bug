import { createElement } from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

console.log('index.css:', require('./index.css'));

const container = document.getElementById('root');

render(createElement(App), container);
