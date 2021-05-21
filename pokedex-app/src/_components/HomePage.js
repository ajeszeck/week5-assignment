import React, { Component } from 'react'
import PokemonTile from './PokemonTile';
import Nav from './Nav';
import '../_stylesheets/HomePage.scss'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(result => {
      return result.json()
    })
    .then(data => {
      this.setState({
        isLoading: true,
        pokemon: data.results
      })
    })
  }


  render() {
    const pokemon = this.state.pokemon.map(pokemon => {
      const id = pokemon.url.split("/")[6]
      return (
          <PokemonTile name={pokemon.name} key={id} url={pokemon.url} id={id} />
      )
    })
    return (
      <div className="home-page">
        <Nav />
        <div className="pokemon">
          {pokemon}
        </div>
      </div>
    )
  }
}
