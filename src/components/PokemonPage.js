import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ''
  }

  onChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  addPokemon = (pokemon) => {
    this.setState({pokemons: [...this.state.pokemons, pokemon]})
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons: pokemons }))
  }

  render() {
    const pokemonsSearch = this.state.search
      ? this.state.pokemons.filter((pokemon) =>
    pokemon.name.includes(this.state.search)
    )
    : this.state.pokemons;

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        {this.state.pokemons ? (
        <PokemonCollection pokemons={pokemonsSearch} />
        ) : null}
      </Container>
    )
  }
}
export default PokemonPage
