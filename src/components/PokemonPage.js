import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API_URL = 'http://localhost:3000'

class PokemonPage extends React.Component {

    state = {
      pokemon: [],
      searchInput: '',
      sortByHp: false
    }

    componentDidMount() {
      fetch(API_URL + '/pokemon')
      .then( response => response.json())
      .then(pokemon => this.setState({ pokemon }))
    }

    addNewPokemon = (newPoke) => {
      this.setState({
        pokemon: [...this.state.pokemon, newPoke]
      })
    }

    handleSearch = (event) => {
      this.setState({
        searchInput: event.target.value
      })
    }

    filteredPokemon = () => {
      return this.state.pokemon.filter( poke => {
        return poke.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
      }) 
    }

    sortPokemon = () => {
      return this.state.sortByHp 
      ? this.filteredPokemon().sort((a, b) => {
        const aHp = a.stats.find(stats => stats.name === 'hp').value
        const bHp = b.stats.find(stats => stats.name ==="hp").value

        return aHp - bHp
        }) 
      : this.filteredPokemon()
    }

    handleSortClick = () => {
      this.setState({
        sortByHp: !this.state.sortByHp
      })
    }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search 
          onChange={this.handleSearch}
          searchInput={this.state.searchInput}
        />
        <button 
          disabled={this.state.sortByHp}
          onClick={this.handleSortClick}>
          Sort by HP
        </button>
        <br />
        <PokemonCollection pokemon={this.sortPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
