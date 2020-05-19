import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super();
    this.state = {
      pokemons: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    let pokemonAPI = 'http://localhost:3000/pokemon'

    fetch(pokemonAPI)
    .then(res => res.json())
    .then(data => this.setState({ pokemons: data }));

  }

  changeSearchTerm = event => {
    this.setState({searchTerm: event.target.value })
  }

  filteredPokemons = () => this.state.pokemons.filter(p => p.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  
  createPokemon = pokemonObj => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(res => res.json())
    .then(pokemon => {
      const updatedPokemons = [pokemon, ...this.state.pokemons] // use the spread operator to copy over the pokemon objects in the new array
      this.setState({ pokemons: updatedPokemons })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
        <br />
        <Search onChange={this.changeSearchTerm} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemons={this.filteredPokemons()} />
      </Container>
    )
  }
}

export default PokemonPage
