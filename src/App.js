import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: HomePage}
  }
  render() {
    return (
      <div className="App">
        <SideNav onClick = {(page)=> this.handleClick(page)}/>
        {React.createElement(this.state.page)}
      </div>
    );
  }

  handleClick(page) {
    this.setState({page: page});
  }
}

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <ul id="slide-out" class="sidenav left-align">
          <li><a href="#!">Home</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li>
                <a class="collapsible-header">Dropdown<i class="material-icons">add</i></a>
                <div class="collapsible-body">
                  <ul>
                    <li><a onClick= {(page) => this.props.onClick(ColorPage)}>First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger left"><i class="material-icons">menu</i></a>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class ColorPage extends Component {
  render() {
    return (
      <div className="ColorPage">
        <p>Color</p>
      </div>
    );
  }
}

export default App;
