import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleForm =(e)=>{
    e.preventDefault()

    // const pokemonObj = {
    //   name: this.state.name,
    //   stats: [{
    //     value: this.state.hp,
    //     name: 'hp'
    //   }],
    //   sprites: {
    //     front: this.state.frontUrl,
    //     back: this.state.backUrl
    //   }
    // }

    this.setState({
      name: e.target['name'].value,
      hp: e.target['hp'].value,
      frontUrl: e.target['frontUrl'].value ,
      backUrl : e.target['backUrl'].value 
    })

    fetch('http://localhost:3000/pokemon', {
      method : 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        height: 0,
        weight: 0,
        name: this.state.name,
        abilities:[],
        moves: [],
        stats: [
          {
            value: 154,
            name: "special-attack"
          },
          {
            value: 130,
            name: "speed"
          },
          {
            value: 110,
            "name": "attack"
          },
          {
            value: this.state.hp,
            "name": "hp"
          },
          {
            value: 90,
            "name": "special-defense"
          },
          {
            value: 90,
            "name": "defense"
          }],
        types: [],
        sprites: [{frontUrl: this.state.frontUrl, backUrl : this.state.backUrl }],

      })
   })
      .then(resp => resp.json())
      .then(newPokemon => {
        const updatedPokemons = [...this.props.pokemonArray, newPokemon]
        this.setState({pokemons: updatedPokemons})
      })
   }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleForm}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
