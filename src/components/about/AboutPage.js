import React, { Component } from 'react'
import { Link } from 'react-router'

class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore alias iusto amet earum adipisci quo assumenda, sint quos repudiandae modi, dolorum temporibus, repellat quasi illo possimus facere nostrum ipsa?</p>
        <Link to="/">&lt;&lt; Back to Home</Link>
      </div>
    )
  }
}

export default AboutPage
