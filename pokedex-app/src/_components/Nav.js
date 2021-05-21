import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../_stylesheets/Nav.scss'

export default class Nav extends Component {
  render() {
    return (
      <div className="navigation">
        <Link to={'/'}>
          <h1>Pokemon Field Guide</h1>
        </Link>
      </div>
    )
  }
}
