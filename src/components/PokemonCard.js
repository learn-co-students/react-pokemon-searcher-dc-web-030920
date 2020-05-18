import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state= {
      image : true
    }
}


toggleImage =()=>{

    if(this.state.image){
    this.setState({
      image : false
    })
    }else{
      this.setState({
        image : true
    })
  }
}
             




  render(){
  
    return (
  <Card onClick={this.toggleImage}>
        <div>
          <div className="image">
            {this.state.image ? 
            <img alt="oh no!" src={this.props.pokemon.sprites.front}/> :
            <img alt="oh no!" src={this.props.pokemon.sprites.back}/>
            }
          </div>
          <div className="content">
    <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
