import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      cardSide: 'front'
    }
  }
  
  flipCard = () => {
    if (this.state.cardSide === 'front'){
      this.setState(
        {cardSide: 'back'}
        )
      }else{
        this.setState(
          {cardSide: 'front'}
          )
        }
      }
      
    render() {
        const hpObject = this.props.pokemon.stats.find(stat => stat.name === 'hp')
        const {name, sprites: {front, back}} = this.props.pokemon
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img alt="oh no!" src={this.state.cardSide === 'front'? front : back}/>
          </div>
          <div className="content">
             <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObject.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
