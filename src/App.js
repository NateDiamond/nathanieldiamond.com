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
        <SideNav onClick = {(page)=> this.changePage(page)}/>
        {React.createElement(this.state.page)}
      </div>
    );
  }

  changePage(page) {
    this.setState({page: page});
  }
}

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <ul id="slide-out" class="sidenav">
          <li class = "no-padding">
           <ul class="collapsible collapsible-accordion">
            <li>
              <a class="collapsible-header" onClick= {(page) => this.props.onClick(HomePage)}>Home</a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#!">Me</a></li>
                  <li><a href="#!">Education</a></li>
                  <li><a href="#!">Work Experience</a></li>
                </ul>
              </div>
            </li>
            </ul>
          </li>
          <li>
            <a class="collapsible-header" onClick= {(page) => this.props.onClick(Blog)}>Blog</a>
          </li>
          <li>
            <a class="collapsible-header" onClick= {(page) => this.props.onClick(Music)}>Music</a>
          </li>
          <li>
            <a class="collapsible-header" onClick= {(page) => this.props.onClick(Running)}>Running</a>
          </li>
          <li>
            <a class="collapsible-header" onClick= {(page) => this.props.onClick(Games)}>Games</a>
          </li>
          <li>
            <ul class="collapsible collapsible-accordion">
              <li>
                <a class="collapsible-header" onClick= {(page) => this.props.onClick(Settings)}>Settings</a>
                <div class="collapsible-body">
                  <ul>
                    <li><a href="#!">Color</a></li>
                    <li><a href="#!">Font</a></li>
                    <li><a href="#!">Animation</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a class="collapsible-header" onClick= {(page) => this.props.onClick(ContactMe)}>Contact Me</a>
          </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger left"><i class="material-icons medium orange-text">keyboard_arrow_right</i></a>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <Title title = "Nathaniel Diamond"/>
    );
  }
}

class Blog extends Component {
  render() {
    return (
      <Title title = "Blog" />
    );
  }
}

class Music extends Component {
  render() {
    return (
      <Title title = "Music" />
    );
  }
}

class Running extends Component {
  render() {
    return (
      <Title title = "Running" />
    );
  }
}

class Games extends Component {
  render() {
    return (
      <Title title = "Games" />
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <Title title = "Settings" />
    );
  }
}

class ContactMe extends Component {
  render() {
    return (
      <Title title = "Contact Me" />
    );
  }
}

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }
  render() {
    return (
    <div className="HomePage">
      <div class="row">
        <header className="App-header">
          <div class = "App-title-container animated valign-wrapper hide-on-small-only">
            <div class = "App-title-sub-container">
              {bounceDownTitle(this.state.title)}
            </div>
          </div>
        </header>
      </div>
    </div>
    );
  }
}

class AnimatedLetter extends Component {
  constructor(props) {
    super(props);
    var letter;
    if(this.props.letter === " ") {
      letter = "\u00a0";
    } else {
      letter = this.props.letter;
    }
    this.state = { animation: this.props.animation,
      delay: {animationDelay: this.props.delay + "ms"},
      letter: letter,
      className: this.props.className
    };
  }
  render() {
      const delay = {animationDelay: this.state.delay};
      const x = this.state.className + " animated " + this.state.animation;
      return(<h1 class= {x} style = {this.state.delay} >{this.state.letter}</h1>);
  }
}

function renderAnimatedLetter(animation, delay, letter, className) {
  return <AnimatedLetter className = {className} animation = {animation} delay = {delay} letter = {letter} />
}

function bounceDownTitle(page) {
  const speedBetweenLetters = 50;
  var elems = [];
  for (var i = 0; i < page.length; i ++) {
    elems.push(renderAnimatedLetter("bounceInDown", speedBetweenLetters*i, page.substr(i,1), "App-title"));
  }
  return elems;
}

export default App;
