import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      usernameValue: '',
      password: '',
      submitted: false
    }

    this.state = this.initialState
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted')
    this.setState({
      submitted: true
    })
  }

  handleUsernameChange = (event) => {
    this.setState({
      usernameValue: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  resetForm = (event) => {
    event.preventDefault();
    this.setState(this.initialState)
  }

  render() {
    console.log(this.state)
    const { usernameValue, password, submitted } = this.state;

    if (submitted) {
      return (
        <div>
          <h1> Welcome {usernameValue} !!!</h1>
        </div>
      )
    }

    return (
      <div className="App">
        <h1> Forms with React </h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="username"
            value={usernameValue}
            onChange={this.handleUsernameChange}
          />
          <input
            type="password"
            placeholder="***"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <button>Send</button>
          <button
            onClick={this.resetForm}
          >
            Reset
          </button>
        </form>
      </div>
    )
  }
}

export default App;
