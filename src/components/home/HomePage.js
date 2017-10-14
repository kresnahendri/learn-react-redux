import React, { Component } from 'react'
import { Link } from 'react-router'

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello React-Redux</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illum culpa dignissimos perferendis.</p>
        <Link to="/about" className="btn btn-primary">Start here!</Link>
      </div>
    )
  }
}

export default HomePage

