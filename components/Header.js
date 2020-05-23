import React, { Component } from 'react'
import logo from '../static/logo.jpg'

export class Header extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt=""/>
      </div>
    )
  }
}

export default Header