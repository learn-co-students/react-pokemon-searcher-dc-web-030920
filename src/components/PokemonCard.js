import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cardClicked: false
    }
  }


  handleCardClick = () => {
    const event = !this.state.cardClicked
    this.setState({
      cardClicked: event
    })
  }


  render() {
    const hp = this.props.pokemon.stats.filter(obj => obj.name === 'hp')
    const {name, sprites } = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.cardClicked? sprites.back : sprites.front} onClick={this.handleCardClick}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
