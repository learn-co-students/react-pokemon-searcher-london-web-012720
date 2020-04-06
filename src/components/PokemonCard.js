import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showBackPicture : false
    }
  }

  handleClick = (e) => {
    this.setState({
      showBackPicture : !this.state.showBackPicture
    })
  }
  render() {
    const {pokemon} = this.props;
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" 
              src={this.state.showBackPicture ? pokemon.backUrl : pokemon.frontUrl} 
              onClick={(e) => this.handleClick(e)}/>
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp} HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
