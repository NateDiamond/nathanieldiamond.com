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
          <li><a href="#!" onClick= {(page) => this.props.onClick(HomePage)}>Home</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li>
                <a class="collapsible-header">Dropdown<i class="material-icons right">add</i></a>
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
        <a href="#" data-target="slide-out" class="sidenav-trigger left"><i class="material-icons medium orange-text">keyboard_arrow_right</i></a>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    const speedBetweenLetters = 50;
    const animationDuration = 1000; //really specified on the HTML elements
    const offset = 400;
    var delay = Array(17).fill(null);
    for(var i = 0; i < 16; i++) {
      delay[i] = {animationDelay: speedBetweenLetters*i + "ms"};
    }
    delay[16] = {animationDelay: (speedBetweenLetters*16 + animationDuration + offset) + "ms"}
    return (
      <div className="HomePage">
        <div class="row">
          <header className="App-header">
            <div class = "App-title-container animated tada valign-wrapper hide-on-small-only" style = {delay[16]}>
              <div class="App-title-sub-container">
                <h1 class="App-title animated bounceInDown" style = {delay[0]} >N</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[1]} >a</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[2]} >t</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[3]} >h</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[4]} >a</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[5]} >n</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[6]} >i</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[7]} >e</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[8]} >l</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[9]} >&nbsp;D</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[10]} >i</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[11]} >a</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[12]} >m</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[13]} >o</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[14]} >n</h1>
                <h1 class="App-title animated bounceInDown" style = {delay[15]} >d</h1>
              </div>
            </div>
          </header>
        </div>
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
