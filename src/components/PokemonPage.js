import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      pokemonArray : [ ],
      search : ''
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemonArray => {
      this.setState({
        pokemonArray : pokemonArray
      })
    })
    
  }

  handleSearch=(e)=>{
    const input = e.target.value 
    this.setState({
      search : input
    })
  }

  
  render() {
    const filteredPokemon = this.state.pokemonArray.filter(p =>
      p.name.includes(this.state.search)
    )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pokemonArray={this.state.pokemonArray}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection filteredPokemon={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
