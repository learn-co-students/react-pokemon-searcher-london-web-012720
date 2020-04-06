import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: '',
    sortByHealth: false
  }

  sortBy = () => {
    this.setState({
      sortByHealth: !this.state.sortByHealth
    })
  }

  sortPokemon = (pokemonToSort, type) => {
    if (type === "hp") {
    return pokemonToSort.sort((a, b) => a.stats[a.stats.length -1].value < b.stats[b.stats.length -1].value ? 1 : -1)
    } else if (type === "id") {
      return pokemonToSort.sort((a, b) => a.id < b.id ? 1 : -1)
    }
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

  filterPokemon = () => {
    const filter = this.state.search 
    ? this.state.pokemons.filter((pokemon) => pokemon.name.includes(this.state.search)) 
    : this.state.pokemons;
    
    const sort = this.state.sortByHealth ? this.sortPokemon(filter, "hp") : this.sortPokemon(filter, "id")
    return sort
  }

  render() {
    return (
      
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange}/>
        <br />
        <Form.Button onClick={this.sortBy}>Sort by Health</Form.Button>
        <br />
        {this.state.pokemons ? (
        <PokemonCollection pokemons={this.filterPokemon()} />
        ) : null}
      </Container>
    )
  }
}
export default PokemonPage
