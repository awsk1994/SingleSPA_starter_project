import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './root.component.js';

const reactLifecyles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: () => document.getElementById('home'),
  rootComponent,
});

export const bootstrap = [
  reactLifecyles.bootstrap,
];

export const mount = [
  reactLifecyles.mount,
];

export const unmount = [
  reactLifecyles.unmount,
];