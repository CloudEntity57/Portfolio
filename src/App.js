import React, { Component } from 'react';
import Circle from './components/Circle';
import Project from './components/Project';
import { links } from './components/js/projects.js';
import Fibonacci from './components/Fibonacci';
import './App.css';
import jquery from 'jquery';
let showSkills='';
console.log('links: ',links);

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      react:false,
      redux:false,
      javascript:false,
      html5:false,
      css3:false,
      mongodb:false,
      nodejs:false,
      lens:true
    }
  }
  componentDidMount(){
    this.startScroll(250);
  }
  startScroll(time){
    let skills = [
      'react','redux','javascript','html5','css3','mongodb','nodejs'
    ];
    this.timeout(time).then(()=>{
      let count = 1;
      showSkills = setInterval(()=>{
        this.scrollSkills(count,skills);
        count++;
        if(count>skills.length-1){
          count=0;
        }
      },1700);
    });
  }
  timeout(time){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        this.setState({
          react:true,
          lens:true
        });
        resolve(true);
      },time);
    });
  }
  scrollSkills(count,skills){
    jquery('.skills').css('width','100%');
    const skill = skills[count];
    const old = skills[count-1] || skills[skills.length-1];
    this.setState({
      [old]:false,
      [skill]:true
    });
  }
//   showSkills(){
//     jquery('.skills').css('width','100%');
//     let skills = [
//       'react','redux','javascript','html5','css3','mongodb','nodejs'
//     ];
//     let count = 0;
//     setInterval(()=>{
//     const skill = skills[count];
//     const old = skills[count-1] || skills[skills.length-1];
//     this.setState({
//       [old]:false,
//       [skill]:true
//     });
//     count++;
//     if(count>skills.length-1){
//       count=0;
//     }
//   },2000
//   );
// }
  clearInterval(){
    clearInterval(showSkills);
    for(let val in this.state){
      if(this.state[val]==true){
        this.setState({
          [val]:false
        });
      }
    };
    // if(this.state.lens==false){
    //   this.startScroll(2000);
    // }
    // this.timeout(5000).then(
    // );
  }
  clearColors(){
    console.log('clearing colors');
    this.setState({
      lens:false
    });
  }
  render() {
    let props = {
      clearColors:()=> this.clearColors(),
      clearInterval:()=> this.clearInterval(),
      lens:this.state.lens
    }
    let num=0;
    const projects = links.map((proj)=>{
      const key = 'project'+num;
      num++;
      return <Project key={key} number={num} project={proj} />
    });
    return (
      <div id="top" >
        <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="nav navbar-default navbar-nav navbar-right">
              <li className="active">
                <a href="#top">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <div className="title-bkg">
          <div className="title-bar">
          </div>
          <div className="title-opacity">
          </div>
          <div className="title-text container-fluid">
            <div className="row">
              <div className="lead col-sm-12">
                <div className="main_name">Josh Foster</div>
                <div className="main_name_subtitle"><a href="#portfolio">Web Developer </a><span>|</span> Designer <span>|</span> Eclipse Chaser</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="portfolio container lead" id="portfolio">
          <div className="row circle_row">
            <div className="circle_float portfolio_name col-xs-12">
              <div className="skills">
                  <Circle {...props} expanding={this.state.react} id="react" brand="React" url="../photos/react-logo-1000-transparent.png"/>
                  <Circle {...props} expanding={this.state.redux} id="redux" brand="Redux" url="../photos/Redux-logo.png"/>
                  <Circle {...props} expanding={this.state.javascript} id="javascript" brand="JavaScript" url="../photos/javascript-logo.png"/>
                  <Circle {...props} expanding={this.state.html5} id="html5" brand="HTML5" url="../photos/HTML5-logo.png"/>
                  <Circle {...props} expanding={this.state.css3} id="css3" brand="CSS3" url="../photos/CSS3-1.png"/>
                  <Circle {...props} expanding={this.state.mongodb} id="mongodb" brand="MongoDB" url="../photos/mongo.png"/>
                  <Circle {...props} expanding={this.state.nodejs} id="nodejs" brand="NodeJS" url="../photos/node.png"/>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="intro_bar">
          <div className="container">
            <h1>
              Perfect websites. Every time.
            </h1>
          </div>
        </div> */}
        <div className="portfolio container lead" id="portfolio">
            <div className="row circle_row">
            <div className="links col-xs-12">
              <div className="portfolio_name col-xs-12">

              </div>
              <div className="insert row">
              </div>
              <div className="portfolio_name col-xs-12">
              </div>
              {/* links here */}
              { projects }
            </div>
            <div id="contact" className="portfolio_name col-xs-12">
              {/* <div className = "fa fa-cube"></div> */}
            </div>
            <div className="portfolio_name col-xs-12" >
                Contact Me
            </div>
            <div className="contact col-xs-12">
              <div className="row">
                <div className="lead col-sm-6">
                  <form className = "form" id = "contact-form" method = "POST" action="https://formspree.io/josh@allenb.com">
                    <div className = "form-group">
                      <label htmlFor = "name">Name&#42;</label>
                      <input className="form-control" type = "text" name = "name" id = "name"/>
                    </div>
                    <div className = "form-group">
                      <label htmlFor = "email">Email&#42; </label>
                      <input className="form-control" type = "text" name = "email" id = "email"/>
                    </div>
                    <div className = "form-group">
                      <label htmlFor = "phone">Phone </label>
                      <input className="form-control" type = "text" name = "phone" id = "phone"/>
                    </div>
                    <div className = "form-group">
                      <label htmlFor = "details">Message</label>
                      <textarea className="form-control" name = "message" id = "details"></textarea>
                    </div>
                    <div className="hidden">
                      <label htmlFor = "address">Address </label>
                      <input name = "address" id = "address"/>
                    </div>
                    <div className = "form-group">
                      <button className="form-control btn btn-primary" type="submit" >Send</button>
                    </div>
                    <p>&#42;&nbsp;required fields</p>
                  </form>
                </div>
                <div className="lead col-sm-6">
                  <p>
                    Want to touch base with me? If you have any questions about my coding chops you'd like to ask, or if you'd rather have a chat about life the universe and everything, just fill out the form and I'll get back to you in no time. Promise!<br/>
                    <br/>
                    No solicitors or spam - merci
                  </p>
                    <Fibonacci size={25} unit='em' iteration={0} spins={10}/>
                </div>
              </div>
            </div>
          </div>
          </div>
        <footer className="nav-footer lead">
          <ul>
            <li className="hidden-sm hidden-xs">My Social Media Links:</li>
            <a href="https://www.linkedin.com/in/joshfoster-dev" alt="Josh Foster LinkedIn">
              <li>LinkedIn&nbsp;<i className = "fa fa-linkedin-square"></i></li>
            </a>
          </ul>
        </footer>

      </div>
    );
  }
}

export default App;
