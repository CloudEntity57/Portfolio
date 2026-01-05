import React, { useState, useRef } from 'react';
import Portal from './Portal';
import $ from 'jquery';

const Project = ({ project, number }) => {
  const [lens, setLens] = useState(true);
  const [expanding, setExpanding] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [list, setList] = useState([]);

  // Refs replacing string refs
  const opacityRef = useRef(null);
  const visitSiteRef = useRef(null);

  // Function to toggle opacity classes
  const showOpacity = () => {
    if (!opacity) {
      if (opacityRef.current) $(opacityRef.current).addClass('portfolio-opacity-animated');
      if (visitSiteRef.current) $(visitSiteRef.current).addClass('visible');
      setOpacity(true);
    } else {
      if (opacityRef.current) $(opacityRef.current).removeClass('portfolio-opacity-animated');
      if (visitSiteRef.current) $(visitSiteRef.current).removeClass('visible');
      setOpacity(false);
    }
  };

  const changeView = (view) => {
    console.log('changing view');
    setTextIndex(view);
  };

  // Prepare data for rendering
  const images = project.images || [];
  const big_images = project.big_images || [];
  const title = project.title.split('').filter((val) => val !== ' ' && val !== "'").join('');
  const loaded_images = big_images.map((img, idx) => {
    const loaded_style = {
      backgroundImage: 'url(' + img + ')',
    };
    return (
      <div key={`loaded-img-${idx}`}>
        <div className="portfolio-image" style={loaded_style} alt={project.title}></div>
      </div>
    );
  });

  const main_photo = loaded_images[textIndex];
  let count = -1;
  const project_id = 'project' + number;
  const portal_id = 'portal' + number;

  const github = project.github ? (
    <div className="github-url">
      <i className="fa fa-github"></i>
      <a href={project.github} alt="GitHub.com" target="_blank" rel="noopener noreferrer">
        {' '}
        View GitHub Repo{' '}
      </a>
    </div>
  ) : (
    ''
  );

  const portals = images.map((image) => {
    count++;
    return (
      <Portal
        key={`portal-${count}`}
        changeView={changeView}
        id={portal_id + count}
        count={count}
        brand={portal_id + count}
        url={image}
      />
    );
  });

  const text = project.text[textIndex];

  return (
    <div className="portfolio-entry link col-xs-12 col-md-12">
      <div className="link-title"></div>
      <div className="portfolio-image-wrapper">
        <div className="image-ratio">
          <a
            ref={null} // No need to keep image_link ref as it wasn't used
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={showOpacity}
            onMouseLeave={showOpacity}
            href={project.url}
            title={project.title}
          >
            <div ref={opacityRef} className="portfolio-image-opacity"></div>
            <div className="visit_site" ref={visitSiteRef}>
              VISIT
            </div>
            {main_photo}
          </a>
        </div>
      </div>
      <div className="portals">{portals}</div>
      <div className="portfolio-title">{project.title}</div>
      {github}
      <div className="portfolio-text">{text}</div>
      {/* <Circle2 expanding={expanding} id={project_id} brand={project_id} url="" /> */}
    </div>
  );
};

export default Project;
