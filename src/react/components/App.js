import React, { Component } from 'react'
import Dashboard from './Dashboard'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
        <div className="container">
          {this.props.children || <Dashboard/>}
        </div>
    )
  }
}

module.exports = App
