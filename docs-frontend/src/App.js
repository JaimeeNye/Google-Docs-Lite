import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = { text: '' }

  componentDidMount() {
    window.fetch('http://localhost:3001/notes/1').then(data => {
      data.json().then(res => {
        this.setState({ text: res.text })
      })
    })
  }
  
  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <textarea
        value={this.state.text}
        onChange={this.handleChange}
      />
    )
  }
}

export default App
