import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonList : [],
      filters : {
        search : ''
      },
      sortBy: 'id'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => { 
        const pkmnData = data.map(p => (
          {name: p.name, frontUrl: p.sprites.front, backUrl:p.sprites.back, hp: p.stats[4].value, id: p.id}
        ));

        this.setState({
          pokemonList : pkmnData
        });

    });
  }

  handleSearchChange = (value) => {
    this.setState({
      filters : {
        ...this.state.filters,
        search : value
      }
    })
  }

  addNewPkmn = (value) => {
    const id = this.state.pokemonList[this.state.pokemonList.length -1].id + 1;
    value = {...value, id: id};
    console.log(value);
    this.setState({
      pokemonList : [...this.state.pokemonList, value]
    })
    const data = {
      name : value.name,
      id : id,
      sprites : {
        front: value.frontUrl,
        back: value.backUrl
      },
      stats : [,,,,{value: value.hp}]
      }
    //   console.log(data);

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log('okay!'))
  }

  handleSort = (sortBy) => {
    this.setState({
      sortBy : sortBy
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addNewPkmn}/>
        <br />
        <Search onChange={(e) => this.handleSearchChange(e.target.value)} value={this.state.filters.search} sortBy={this.state.sortBy} handleSort={this.handleSort}/>
        <br />
        <PokemonCollection pkmnList={this.state.pokemonList} searchFilter={this.state.filters.search} sortBy={this.state.sortBy}/>
      </Container>
    )
  }
}

export default PokemonPage
