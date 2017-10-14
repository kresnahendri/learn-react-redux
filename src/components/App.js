import React, { Component, PropTypes } from 'react'
import Header from './common/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.proptypes = {
  children: PropTypes.object.isRequired
}

export default App
