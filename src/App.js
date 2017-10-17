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
      lens:true,
      subtitle:'|',
      top_form:false,
      contact_btn_text:true
    }
  }
  componentDidMount(){

  let subtitle = this.state.subtitle;
  setTimeout(()=>{
    this.addLetter(0);
  },750);

  }
  addLetter(index,subtitle){
    let full = 'Web Developer | Designer ';
    full = full.split('');
    if(index == full.length-1) return (()=>{
      this.setState({
        react:true,
        redux:true,
        javascript:true,
        html5:true,
        css3:true,
        mongodb:true,
        nodejs:true
      })
    })();
    let current = (subtitle) ? subtitle.split('') : [];
    current = current.concat(full[index]).join('');
    this.setState({
      subtitle:current
    });
    index++;
    setTimeout(()=>{
      this.addLetter(index,current);
    },75)
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
      },1000);
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

  clearInterval(){
    clearInterval(showSkills);
    for(let val in this.state){
      if(this.state[val]==true){
        this.setState({
          [val]:false
        });
      }
    };

  }
  clearColors(){
    console.log('clearing colors');
    this.setState({
      lens:false
    });
  }
  letsWorkTogether(e){
    e.preventDefault();
    jquery(e.target).addClass('work_clicked');
    this.setState({
      contact_btn_text:false
    })
    setTimeout(()=>{
      jquery('.work_clicked').addClass('work_expand');
      setTimeout(()=>{
        // jquery('.work_clicked').remove();
        this.setState({
          top_form:true
        });
      },1000);
    },750)
  }
  topFormClose(e){
    this.setState({
      top_form:false
    });
    jquery('.work_with').removeClass('work_expand').removeClass('work_clicked');
    setTimeout(()=>{
        this.setState({
          contact_btn_text:true
        })
    },550);
  }
  render() {
    let props = {
      clearColors:()=> this.clearColors(),
      clearInterval:()=> this.clearInterval(),
      lens:this.state.lens
    }
    let num=0;
    const divider = (
      <div className="divider1_wrapper">
        <div className="divider_1"></div>
      </div>
    )
    const projects = links.map((proj)=>{
      const key = 'project'+num;
      num++;
      return (
        <div>
      <Project key={key} number={num} project={proj} />

        </div>
      );
    });
    const subtitle = this.state.subtitle;
    const contact_btn_text = (this.state.contact_btn_text) ? "Let's work together" : "";
    const form = ( this.state.top_form )?(
      <div className="top_form">
        <div className="top_form_close" onClick={this.topFormClose.bind(this)}>x</div>
        <form className = "form" id = "contact-form" method = "POST" action="https://formspree.io/josh@allenb.com">
        <h1>Let's get started.</h1>
        <h4>After introducing yourself and describing your project, I'll get in touch and schedule a time for us to talk in more detail. Or, contact me directly at <a href="mailto:joshfost@gmail.com">joshfost@gmail.com.</a></h4>
          <div className = "form-group">
            <input placeholder="Name*" className="form-control" type = "text" name = "name" id = "name"/>
          </div>
          <div className = "form-group">
            <input placeholder="email*" className="form-control" type = "text" name = "email" id = "email"/>
          </div>
          <div className = "form-group">
            <input placeholder="phone" className="form-control" type = "text" name = "phone" id = "phone"/>
          </div>
          <div className = "form-group">
            <textarea placeholder="Describe your project. What do you want to create, and why? How can I be of assistance in making it happen?" className="form-control" name = "message" id = "details"></textarea>
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
    ) : '';
    // projects.splice(2,0,divider);
    return (
      <div id="top" >
      { form }
        {/* <nav className="navbar navbar-fixed-top navbar-inverse">
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
      </nav> */}
      <header>
        <div className="title-bkg">
        <div className="learn_more">
          <a href='#portfolio'>Learn more about what I do<br/>
          <div className="fa fa-chevron-down"></div></a>
        </div>
          <div className="title-bar">
          </div>
          <div className="title-opacity">
          </div>
          <div className="title-text container-fluid">
            <div className="row">
              <div className="lead col-sm-12">
                <div className="main_name">Josh Foster</div>
                <div className="main_name_subtitle">{ subtitle }</div>
                <div ref='work_with' onClick={this.letsWorkTogether.bind(this)} className="work_with">{contact_btn_text}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="portfolio container lead" id="portfolio">
          <div className="row circle_row">
            <div className="center">
              <h1>Skills</h1>
            </div>
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
{/*
        <div id='intro_bar' className="intro_bar">
          <div className="container">
            <h1>
              Let's work together
            </h1>
            <div className="contact_me">Contact Me</div>
          </div>
        </div> */}
        <div className="portfolio  lead" id="portfolio">
            <div className=" circle_row">
            <div className="links ">
              <div className="portfolio_name col-xs-12">

              </div>
              {/* <div className="insert row">
              </div> */}
              <div className="center">
                  <h1>Projects</h1>
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
            <div className="contact_bottom col-xs-12">
              <div ref='work_with' onClick={this.letsWorkTogether.bind(this)} className="work_with">{contact_btn_text}</div>
              {/* <div className="row">
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
              </div> */}
            </div>
          </div>
          </div>
        <footer className="nav-footer lead">
          <ul>
            <a href="https://www.linkedin.com/in/joshfoster-dev" alt="Josh Foster LinkedIn">
              <li>LinkedIn&nbsp;<i className = "fa fa-linkedin-square"></i></li>
            </a>
            <a href="https://github.com/CloudEntity57?tab=repositories" alt="Josh Foster LinkedIn">
              <li>GitHub&nbsp;<i className = "fa fa-github"></i></li>
            </a>
          </ul>
        </footer>

      </div>
    );
  }
}

export default App;
