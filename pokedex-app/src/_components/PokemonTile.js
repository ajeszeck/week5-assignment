import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import '../_stylesheets/PokemonTile.scss'

export default class Pokemon extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="pokemon-tile">
        <Link to={`/pokemon/${this.props.id}`} >
          <p>{name}</p>
        </Link>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired
}
