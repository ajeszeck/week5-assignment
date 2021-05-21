import React, { Component } from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';

import '../_stylesheets/PokemonPage.scss'

export default class PokemonPage extends Component {
  state = {
    data: null,
    images: null,
    error: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(result => {
      return result.json()
    })
    .then(data => {
      this.setState({
        data: data,
        image: data.sprites,
      })
    })
    .catch(error => this.setState({error}))
  }

  render() {
    const { data, image, error} = this.state;
    let content;

    if (data) {
      content = (
        <div>
          <div className="header">
            <Link to={'/'} >
              <p className="arrow-back">{"<"}</p>
            </Link>
            <h1 className="name">{data.name}</h1>
          </div>
          <div className="pokemon-content">
            <div className="images">
              <img src={image.front_default} alt={data.name} width="150px" />
              <img src={image.back_default} alt={data.name} width="150px" />
              <img src={image.front_shiny} alt={data.name} width="150px" />
              <img src={image.back_shiny} alt={data.name} width="150px" />
            </div>
            <div className="information">
              <div>
                <h3>Description</h3>
                <p>Height: {data.height}</p>
                <p>Weight: {data.weight}</p>
              </div>
              <div>
                <h3>Stats</h3>
                {data.stats.map(stat => {
                    return (
                      <li key={stat.stat.name}>{`${stat.stat.name}: ${stat.base_stat}`}</li>
                    )
                  })}
              </div>
              <div>
                <h3>Abilities</h3>
                <ul>
                  {data.abilities.map(ability => {
                    return (
                      <li key={ability.ability.name}>{ability.ability.name}</li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h3>Types</h3>
                <ul>
                  {data.types.map(type => {
                    return (
                      <li key={type.type.name}>{type.type.name}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="header">
            <Link to={'/'} >
              <p className="arrow-back">{"<"}</p>
            </Link>
          </div>
          <div>
            <p>Still loading...</p>
          </div>
        </div>
      )
    }
    
    return (
      <div>
        <Nav />
        {content}
        {error && <p>{error}</p>}
      </div>
    )
  }
}