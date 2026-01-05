import React, { useEffect, useRef, useState } from 'react';
import Circle from './components/Circle';
import Project from './components/Project';
import { links } from './components/js/projects.js';
// import Fibonacci from './components/Fibonacci';
import './App.css';
// import './App.scss';
import $ from 'jquery'; // alias for jQuery

const App = () => {
  const [state, setState] = useState({
    react: false,
    redux: false,
    javascript: false,
    html5: false,
    css3: false,
    mongodb: false,
    nodejs: false,
    lens: true,
    subtitle: '|',
    top_form: false,
    contact_btn_text: true
  });

  const skills = ['react', 'redux', 'javascript', 'html5', 'css3', 'mongodb', 'nodejs'];
  const showSkillsRef = useRef(null);

    const addLetter = (index = 0, subtitle = '') => {
    const full = 'Web Developer | Designer '.split('');
    if (index >= full.length) {
      setState(prev => ({
        ...prev,
        react: true,
        redux: true,
        javascript: true,
        html5: true,
        css3: true,
        mongodb: true,
        nodejs: true
      }));
      return;
    }
    const current = subtitle + full[index];
    setState(prev => ({ ...prev, subtitle: current }));
    setTimeout(() => addLetter(index + 1, current), 75);
  };
  useEffect(() => {
    setTimeout(() => addLetter(0, ''), 750);
  }, []);

  const timeout = (time) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setState(prev => ({ ...prev, react: true, lens: true }));
        resolve();
      }, time);
    });

  const scrollSkills = (count) => {
    $('.skills').css('width', '100%');
    const skill = skills[count];
    const old = skills[count - 1] || skills[skills.length - 1];
    setState(prev => ({
      ...prev,
      [old]: false,
      [skill]: true
    }));
  };

  const startScroll = async (time) => {
    await timeout(time);
    let count = 1;
    showSkillsRef.current = setInterval(() => {
      scrollSkills(count);
      count = (count + 1) % skills.length;
    }, 1000);
  };

  const clearAllSkills = () => {
    clearInterval(showSkillsRef.current);
    const cleared = {};
    for (const key of skills) {
      cleared[key] = false;
    }
    setState(prev => ({ ...prev, ...cleared }));
  };

    const letsWorkTogether = (e) => {
    e.preventDefault();
    $(e.target).addClass('work_clicked');
    setState(prev => ({ ...prev, contact_btn_text: false }));
    setTimeout(() => {
      $('.work_clicked').addClass('work_expand');
      setTimeout(() => {
        setState(prev => ({ ...prev, top_form: true }));
      }, 1000);
    }, 750);
  };

  const topFormClose = () => {
    setState(prev => ({ ...prev, top_form: false }));
    $('.work_with').removeClass('work_expand').removeClass('work_clicked');
    setTimeout(() => {
      setState(prev => ({ ...prev, contact_btn_text: true }));
    }, 550);
  };

  // ...inside return(
return (
  <div id="top">
    {state.top_form && (
      <div className="top_form">
        <div className="top_form_close" onClick={topFormClose}>x</div>
        {/* Contact form markup... */}
      </div>
    )}
    <header>
      <div className="title-bkg">
        <div className="title-text container-fluid">
          <div className="lead col-sm-12">
            <img width="75px" src='./photos/Josh_logo_red.png' />
            <div className="main_name">Josh Foster</div>
            <div className="main_name_subtitle">{state.subtitle}</div>
            <div onClick={letsWorkTogether} className="work_with">
              {state.contact_btn_text ? "Let's work together" : ''}
            </div>
          </div>
        </div>
      </div>
    </header>

    <main className="clearfix">
      <div className="portfolio container lead" id="portfolio">
        <div className="row circle_row">
          <div className="skills">

            {skills.map(skill => (
              <Circle
                key={skill}
                id={skill}
                brand={skill.charAt(0).toUpperCase() + skill.slice(1)}
                url={`./photos/${skill}-logo.png`}
                expanding={state[skill]}
                lens={state.lens}
                clearColors={() => setState(prev => ({ ...prev, lens: false }))}
                clearInterval={clearAllSkills}
              />
            ))}
          </div>
        </div>
        {links.map((proj, i) => (
          <div key={`project${i + 1}`}>
            <Project number={i + 1} project={proj} />
          </div>
        ))}
      </div>
    </main>

    <footer className="nav-footer lead">
      <ul>
        <a href="https://www.linkedin.com/in/joshfoster-dev"><li>LinkedIn&nbsp;<i className="fa fa-linkedin-square"></i></li></a>
        <a href="https://github.com/CloudEntity57?tab=repositories"><li>GitHub&nbsp;<i className="fa fa-github"></i></li></a>
      </ul>
    </footer>
  </div>
);
}

export default App;
