import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    
    const pokemon = this.props.filteredPokemon.map( pokemon => {
         return <PokemonCard pokemon={pokemon} key={pokemon.id}/>
      }
    )

    return (
      <Card.Group itemsPerRow={6}>
        <br></br>
        {pokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection
