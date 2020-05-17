import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      side: "front"
    }
  }

  flipSide = () => {
    if (this.state.side === "front"){
      this.setState({
        side: "back"
      })
    } else if (this.state.side === "back"){
      this.setState({
        side: "front"
      })
    }
  }

  switchPicture = () => {
    if (this.state.side === "front"){
      let urlFront = this.props.pokemonObj.sprites.front
      return urlFront
    } else if (this.state.side === "back"){
      let urlBack = this.props.pokemonObj.sprites.back
      return urlBack
    }
  }

  render() {
    let findHp = this.props.pokemonObj.stats.find(stat => stat.name === "hp")
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" onClick={this.flipSide} src={this.switchPicture()} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {findHp.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
