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

  onChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }

  handleSubmit = (event) => {
    const newPokemon= this.state
    this.props.addPokemon(newPokemon)
    this.setState(
      {name: '',
        hp: '',
        frontUrl: '',
        backUrl: ''}
    )
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onChange} value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onChange} value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.onChange} value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.onChange} value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
