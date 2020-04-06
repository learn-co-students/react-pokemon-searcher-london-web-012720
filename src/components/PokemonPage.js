import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: "",
      searchTerm: "",
    };
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ pokemon: data });
      });
  };

  render() {
    const pokemonsSearch = this.state.searchTerm
      ? this.state.pokemon.filter((pokemon) =>
          pokemon.name.includes(this.state.searchTerm)
        )
      : this.state.pokemon;
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
        />
        <br />
        {this.state.pokemon ? (
          <PokemonCollection pokemons={pokemonsSearch} />
        ) : null}
      </Container>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    debugger;

    const body = {
      name: e.target.name.value,
      stats: [{ name: "hp", value: e.target.hp.value }],
      sprites: { front: e.target.frontUrl.value, back: e.target.backUrl.value },
    };
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        this.fetchPokemon();
      });
  };
}

export default PokemonPage;
