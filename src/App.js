import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const fontOptions = ['Roboto Mono'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: HomePage,
                  primary: {red: 0,green: 0,blue: 0, alpha: 15},
                  secondary: {red: 15,green: 0,blue: 0, alpha: 15},
                  tertiary: {red: 0,green: 0,blue: 15, alpha: 15},
                  fontOption: 0,
                  animated: true};
  }
  render() {
    return (
      <div className="App">
        <SideNav onClick = {(page)=> this.changePage(page)}/>
        {React.createElement(this.state.page, {changePage: (page)=> this.changePage(page)})}

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
        <a href="#" data-target="slide-out" class="sidenav-trigger left"><i class="material-icons medium" style = {{color: '#888'}}>keyboard_arrow_right</i></a>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    var headerStyle = {fontFamily: 'Roboto Mono, monospace'};
    return (
      <div class = "HomePage" style = {{backgroundColor: '#EEE'}}>
        <Title title = "Nathaniel Diamond"/>
        <div class = "container">
          <div class = "row">
            <div class = "col l10 m12 s12 offset push-l1">
              <div class = "card horizontal small animated bounceInRight">
                <div class = "card-image right">
                  <img src="./img/professional.JPG"/>
                </div>
                <div class = "card-stacked">
                  <div class = "card-content">
                    <h6 class = "flow-text" style={headerStyle}>Hello, world! My name is Nathaniel Diamond, but you can call me Nate. This
                                            website serves both as an experiment in web design and as
                                            a forum to make myself more accessible. You will find a table of
                                            contents if you click the left arrow. Though this might sound unconventional,
                                            may I suggest starting with the <a onClick= {(page) => this.props.changePage(Settings)}>Settings </a>
                                            page?
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class = "row">
            <div class = "col l10 m12 s12 push-l1">
              <div class = "card small horizontal animated bounceInLeft slower">
                <div class = "card-stacked">
                  <div class = "card-content">
                    <h6 class = "flow-text" style={headerStyle}>This year is my third year at Cornell University. I am
                                            majoring in computer science and plan on starting my
                                            masters in it next year. I also challenge myself with
                                            upper-level math courses and take economics coursework
                                            for fun. I am currently Vice President of <a href = "#!">Cornell Running Club</a>.
                                            Check out my <a onClick= {(page) => this.props.changePage(Settings)}>running page </a>
                                            for more!</h6>
                  </div>
                </div>
                <div class = "card-image right">
                  <img src="./img/bigRed.png"/>
                </div>
              </div>
            </div>
          </div>
          <div class = "row">
            <div class = "col l10 m12 s12 offset push-l1">
              <div class = "card small horizontal animated bounceInRight slower">
                <div class = "card-image right">
                  <img src="./img/workdayBlue.JPG"/>
                </div>
                <div class = "card-stacked">
                  <div class = "card-content">
                    <h6 class = "flow-text" style={headerStyle}>This past summer, I had the privilege of working for Workday
                                            on their Student platform. After learning their proprietary language,
                                            I was very seamlessly integrated into their team and tasked with tackling actual
                                            customer features.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div class="row">
        <header className="App-header">
          <div class = "App-title-container animated valign-wrapper">
            <div class = "App-title-sub-container">
              {bounceDownTitle(this.state.title)}
            </div>
          </div>
        </header>
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
      delay: {animationDelay: this.props.delay + "ms",
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '7vw'},
      letter: letter,
      className: this.props.className
    };
  }
  render() {
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
