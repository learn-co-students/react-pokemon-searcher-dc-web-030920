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
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {id, name, hp, frontUrl, backUrl} = this.state
  
    //this functioon body takes care of sending it back to the server
    const pokemon = {
      id: id,
      name: name,
      stats: [{name: 'hp', value: hp}],
      sprites: {front: frontUrl, back: backUrl}
      
    }
     
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(pokemon)
    })
     // this one takes care of sending the data back to PokemonPage to be rendered
     this.props.addPokemon(pokemon)
   
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
