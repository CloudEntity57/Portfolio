import React, { useState, useEffect, useRef } from 'react';

const Portal = ({ url, brand, count, changeView }) => {
  const [open, setOpen] = useState(false);
  const portPhotoRef = useRef(null);

  // On mount and url/brand change, set background image style
  useEffect(() => {
    if (portPhotoRef.current) {
      portPhotoRef.current.style.backgroundImage = `url("${url}")`;
    }
  }, [url, brand]);

  const openLens = () => {
    // Remove classes from other elements
    document.querySelectorAll('.port_opened').forEach((el) => {
      el.classList.remove('port_bigger');
      el.classList.remove('port_opened');
    });

    if (portPhotoRef.current) {
      portPhotoRef.current.classList.add('port_bigger', 'port_opened');
    }

    changeView(count);
  };

  const closeLens = () => {
    if (portPhotoRef.current) {
      portPhotoRef.current.classList.remove('port_bigger');
    }
  };

  const toggleOpen = (e) => {
    e.preventDefault();
    if (!open) {
      openLens();
      setOpen(true);
    } else {
      closeLens();
      setOpen(false);
    }
  };

  return (
    <div className="port_circle">
      <div className="port_circle_holder">
        <div
          id={brand}
          ref={portPhotoRef}
          className="port_photo port_photo_inner"
          onMouseEnter={toggleOpen}
          onMouseLeave={toggleOpen}
          onTouchStart={toggleOpen}
        >
          {/* <img src={url} alt="port_brand_logo" className="port_brand_logo img-responsive" /> */}
        </div>
      </div>
    </div>
  );
};

export default Portal;
