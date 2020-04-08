import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchPoke:"",
    sortById: false,
    hasLoaded: false

  }

  handleSearchTerm = (event) =>{
    this.setState({
      searchPoke: event.target.value
    })
  }


  addPokemon = (pokemon) =>{
   this.setState({
     pokemons: [...this.state.pokemons, pokemon]
   })
  }


componentDidMount(){
  fetch("http://localhost:3000/pokemon")
  .then(resp => resp.json())
  .then(obg => {
    this.setState({
      pokemons: obg,
      hasLoaded: true
    })
  })
}


  render() {
   

    if (!this.state.hasLoaded){
      return null
    }

    let renderPokemon = this.state.sortById? 
    this.state.pokemons.sort((a, b) => (a.id > b.id)? 1 : -1  ) 
    : this.state.pokemons.sort((a, b) => (a.stats[5].value > b.stats[5].value)? 1 : -1  )
    

   
    
    return (
      <Container>
        
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleSearchTerm={this.handleSearchTerm} />
        <br />
        <PokemonCollection pokemons={renderPokemon.filter(p => p.name.includes(this.state.searchPoke))} />
      </Container>
    )
  }
}

export default PokemonPage
