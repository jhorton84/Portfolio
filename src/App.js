import React, { Component } from 'react';
import routes from "./routes";
// import './reset.css';
import './App.css';
import Nav from './Components/Nav/Nav';


class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    }
  }

  dropDownToggle = () => {
    console.log("toggle", this.state.toggle);
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <div className="App-component">
        <Nav 
          dropDownToggle={this.dropDownToggle}
          toggle={this.state.toggle}
        />
        {routes}
        {/* <p>What the hell</p>
        hello */}
      </div>
    );
  }
}

export default App;
