import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      toggle: false 
    }
  }

  getHp = () => {
    const hp = this.props.pokemon.stats.find(s => s.name === 'hp')
    return hp.value
  }


  handleClick = () =>{
    //set toggle to opposite of what it currently is 
    this.setState({toggle: !this.state.toggle })
  }


  render() {
    
    //deconstruct 
    const {name, sprites: {front, back}} = this.props.pokemon 
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.toggle? back : front} />
          </div>
          <div className="content">
            <div className="header"> {name} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()} hp 
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
