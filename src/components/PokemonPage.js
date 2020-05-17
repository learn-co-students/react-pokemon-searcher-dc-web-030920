import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
      search: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }
  
  searchTerm = (event) => {
    this.setState({
      search: event.target.value
    })
  }
  // Renders the Search Bar To Work
  // componentDidUpdate(){
  //   if (this.searchTerm){
  //   fetch("http://localhost:3000/pokemon")
  //   .then(resp => resp.json())
  //   .then(data => {
  //     this.setState({
  //       pokemon: data.filter(pokemon => pokemon.name.includes(this.state.search))
  //     })
  //   })
  // }
  // }

  addPokemon = (newPokemon) => {
    const obj = {
      name: newPokemon.name,
      stats: [{
        name: 'hp',
        value: newPokemon.hp
                }],
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(obj)
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchTerm={this.searchTerm} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
