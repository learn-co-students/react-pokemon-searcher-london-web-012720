import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    facingFoward: true
  }

  hpStat = () => {
    return this.props.poke.stats.find(stat => stat.name === "hp").value
  }

  cardImgae = () => {
    return this.state.facingFoward 
      ? this.props.poke.sprites.front 
      : this.props.poke.sprites.back
}

  handleClick = () => {
    this.setState({
      facingFoward: !this.state.facingFoward 
    })
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.cardImgae()} alt="error loading" />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hpStat()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
