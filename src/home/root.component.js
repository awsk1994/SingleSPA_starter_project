import React from 'react';
import { render } from 'react-dom';

export default class rootComponent extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <h1>ok</h1>
      </div>
    );
  }
  componentWillUnmount() {
    this.subscription.dispose();
  }
}