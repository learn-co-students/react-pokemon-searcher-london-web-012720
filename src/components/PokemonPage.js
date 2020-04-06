import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: '',
    sortByHealth: true
  }

  sortBy = () => {
    this.setState({
      sortByHealth: !this.state.sortByHealth
    })
    console.log(this.state.sortByHealth)
  }

  sortPokemon = (pokemonToSort) => {
    return pokemonToSort.sort((a, b) => a.stats[a.stats.length -1].value < b.stats[b.stats.length -1].value ? 1 : -1)
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
    : 
    // this.state.pokemons;

   this.state.sortByHealth ? this.sortPokemon(this.state.pokemons) : this.state.pokemons;
    return (
      
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange} sortBy={this.sortBy} sorted={this.state.sortByHealth}/>
        <br />
        {this.state.pokemons ? (
        <PokemonCollection pokemons={pokemonsSearch} />
        ) : null}
      </Container>
    )
  }
}
export default PokemonPage
