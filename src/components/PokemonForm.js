import React from 'react'
import { Form } from 'semantic-ui-react'

const API_URL = 'http://localhost:3000'


class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const {name, hp, frontUrl, backUrl} = this.state

    fetch(API_URL + '/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name,
        sprites: {
          front: frontUrl,
          back: backUrl
        },
        stats: [{
          name: 'hp',
          value: hp
        }]
      })
    })
    .then(response => response.json())
    .then(newPoke => this.props.addNewPokemon(newPoke))   

    event.target.reset()
  }

  render() {

    const {name, hp, frontUrl, backUrl } = this.state 

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              fluid 
              label="Name" 
              placeholder="Name"
              name="name" 
              value={name}
              onChange={this.handleInputChange}
              />
            <Form.Input 
            fluid
            label="hp" 
            placeholder="hp" 
            name="hp"
            value={hp}
            onChange={this.handleInputChange}
            />
            <Form.Input 
            fluid 
            label="Front Image URL" 
            placeholder="url" 
            name="frontUrl" 
            value={frontUrl}
            onChange={this.handleInputChange}
            />
            <Form.Input 
            fluid 
            label="Back Image URL" 
            placeholder="url" 
            name="backUrl" 
            value={backUrl}
            onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
