import React, { Component } from 'react'

class Emails extends Component {
  render() {
    const events = [
      { id: 0, title: 'essay due' }
    ]

    return (
      <div>
        <h2>Emails</h2>
        {events.id}
      </div>
    )
  }
}

module.exports = Emails
