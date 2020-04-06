import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = { clicked: false };
  render() {
    const pokemon = this.props.pokemon;
    return (
      <Card>
        <div onClick={this.toggleClick}>
          <div className="image">
            <img
              alt="oh no!"
              src={
                this.state.clicked ? pokemon.sprites.back : pokemon.sprites.front
              }
            />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[pokemon.stats.length - 1].value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
  toggleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
}

export default PokemonCard;
