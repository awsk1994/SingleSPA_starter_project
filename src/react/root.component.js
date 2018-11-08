import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

const rootRoute = {
  childRoutes: [ {
    path: 'react',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Emails'),
      require('./routes/Memos'),
    ]
  } ]
};

export default class Root extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>React Main Page </h1>
        <Router history={browserHistory} routes={rootRoute}/>
      </div>
    );
  }
  
  componentWillMount() {
  }
  componentWillUnmount() {
  }
}
