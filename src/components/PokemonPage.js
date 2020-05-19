import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemons: [],
      searchInput: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then( data => {
      this.setState({
        pokemons: data
      })
    })
  }

  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    })
   
  }

  filterPokemons = () => {
    const searchTerm = this.state.searchInput
    const filteredSearch = this.state.pokemons.filter( poke => poke.name.includes(searchTerm))
    return filteredSearch
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [pokemon, ...this.state.pokemons]
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch} search={this.state.searchInput}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemons()} search={this.state.searchInput}/>
      </Container>
    )
  }
}

export default PokemonPage
