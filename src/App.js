import React, { Component } from 'react';
import './App.css';

// Components
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {

  state = {
    users: [
      {username: "Luis"},
      {username: "Alphonzo"}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        {username: "Luis"},
        {username: event.target.value}
      ]
    })
  }

  render() {

    return (
      <div className="App">
        <UserInput changeName={this.nameChangeHandler}/>
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[1].username}/>
      </div>
    );


  }
}

export default App;
