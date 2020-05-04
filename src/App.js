import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts'
import Table from './Table'
import Form from "./Form"

class App extends Component {
  
  state = {
    characters: [],
  }

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  } 

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state 

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
      // <div className="container-fluid">
      //     <nav>
      //         <div className="nav wrapper center-align">
      //             <a href="/" className="brand-logo">Contacts</a>
      //         </div>
      //      </nav>
      //      <div className="row">
      //         <Contacts />
      //      </div>
      // </div>
    )
  }
}

export default App;
