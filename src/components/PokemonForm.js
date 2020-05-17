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

  inputValues = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state)
    const newPokemon = this.state
    this.props.addPokemon(newPokemon)
    this.setState({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" onChange={this.inputValues} name="name" required/>
            <Form.Input fluid label="hp" placeholder="hp" onChange={this.inputValues} name="hp" required/>
            <Form.Input fluid label="Front Image URL" placeholder="url" onChange={this.inputValues} name="frontUrl" required/>
            <Form.Input fluid label="Back Image URL" placeholder="url" onChange={this.inputValues} name="backUrl" required/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
