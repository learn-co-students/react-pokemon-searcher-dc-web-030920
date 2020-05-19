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

  handleChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value 
    })

  }

  handleSubmit = event => {
    event.preventDefault()

    const pokemonObj = {
      name: this.state.name,
      states: [{value: this.state.hp, 
          name: 'hp'}],
      sprites: {
        front: this.state.frontUrl, 
        back: this.state.backUrl 
      }
    }

    this.props.createPokemon(pokemonObj)

  }


  render() {
    const {name, hp, frontUrl, backUrl } = this.state

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={this.handleChange}  />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={this.handleChange}  />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={this.handleChange}  />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
