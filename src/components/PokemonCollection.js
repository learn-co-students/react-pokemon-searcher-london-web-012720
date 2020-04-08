import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  createPokeCard = () =>{
    return this.props.pokemons.map(poke => <PokemonCard poke={poke} key={poke.id}/>)
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
       {this.createPokeCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
