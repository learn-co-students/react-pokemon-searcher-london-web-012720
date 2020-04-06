import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({pokemons}) => {
    return (
      <Card.Group itemsPerRow={6}>
        {pokemons.map(pokemon => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />
        })}
      </Card.Group>
    )
  
}

export default PokemonCollection
