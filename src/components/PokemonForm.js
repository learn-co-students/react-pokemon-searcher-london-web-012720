import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      hp: "",
      frontUrl: '',
      backUrl: ''
    }
  }

  handelChange = (e) =>{
   
    this.setState({
      [e.target.name]: e.target.value
    })
  }
handleSubmit = (e) =>{

console.log(e)
  const {name, hp,  frontUrl, backUrl} = this.state
 const confObj = {
   method: "POST",
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
    name: name,
    stats: [{
        value: hp,
        name: "hp"
        
      }],
      sprites:{
        front: frontUrl,
      back: backUrl
      }
   })
 };
 fetch('http://localhost:3000/pokemon', confObj)
 .then(resp => resp.json())
 .then(poke => {
   this.props.addPokemon(poke)
  
 })
 e.target.reset()


 
}



  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handelChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp"  onChange={this.handelChange}  />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handelChange}  />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handelChange}  />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
