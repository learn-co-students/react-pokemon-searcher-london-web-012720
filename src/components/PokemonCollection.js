import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPkmnCards = () => {
    const pkmnData = this.filterPkmns(this.props.pkmnList);
    this.sortPkmns(pkmnData);
    return pkmnData.map(pkmn => <PokemonCard pokemon={pkmn}/>)
  }

  sortPkmns = (data) => {
    const {sortBy} = this.props;
    data.sort((a,b) => {
      if (a[sortBy] > b[sortBy]) return 1;
      if (a[sortBy] < b[sortBy]) return -1;
      return 0
    })
  }

  filterPkmns = (data) => {
    const regex = new RegExp(`\\b${this.props.searchFilter}.*`, 'g');
    return data.filter(p => p.name.match(regex));
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPkmnCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
