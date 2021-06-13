import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      character: {},
    }
  }

  componentDidMount() {
    const baseUrl = 'https://swapi.dev/api/people/1'

    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        })
      })
  }

  render() {
    const text = this.state.loading ? 'loading...' : this.state.character.name
    return (
      <>
        <h1>{text}</h1>
      </>
    )
  }
}

export default App
