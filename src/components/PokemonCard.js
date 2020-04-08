import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state ={
    flipped: false
  }

  flipImage = () =>{
    this.setState({
      flipped: !this.state.flipped
    })
  }


  render() {
    const { name , sprites, stats} = this.props.poke
    let s = stats.filter(s => s.name =="hp")
    
  
    
    return (
      <Card>
        <Card.Content> <div onClick={this.flipImage}>
          <div className="image">
            <img alt="oh no!" src={this.state.flipped? sprites.back : sprites.front} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               { s[0].value} {s[0].name}
            </span>
          </div>
        </div>
        </Card.Content>
       
      </Card>
    )
  }
}

export default PokemonCard
