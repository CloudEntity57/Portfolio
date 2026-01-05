import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const Circle = ({ brand, expanding, lens, url = "../photos/react-logo-1000-transparent.png", clearInterval }) => {
  const brandId = `${brand}1`;
  const brandClass = `covered brand_title ${brand}`;
  const photoRef = useRef(null);

  const openLens = () => {
    const $photo = $(photoRef.current);
    const $lens1 = $photo.children('.lens1');
    const $lens2 = $photo.children('.lens2');
    const $lens3 = $photo.children('.lens3');
    const $lens4 = $photo.children('.lens4');
    const brandSelector = `.${brand}`;

    $photo.addClass('bigger');
    $lens1.addClass('left');
    $lens4.addClass('left');
    $lens2.addClass('right');
    $lens3.addClass('right');
    $(brandSelector).addClass('raised');
  };

  const closeLens = () => {
    const $photo = $(photoRef.current);
    const $lens1 = $photo.children('.lens1');
    const $lens2 = $photo.children('.lens2');
    const $lens3 = $photo.children('.lens3');
    const $lens4 = $photo.children('.lens4');

    $photo.removeClass('bigger');

    if (lens === true) {
      $lens1.removeClass('left');
      $lens4.removeClass('left');
      $lens2.removeClass('right');
      $lens3.removeClass('right');
    }
  };

  const show = () => {
    const $photo = $(photoRef.current);
    $photo.addClass('showing');

    setTimeout(() => {
      closeLens();
      $(`.${brand}`).addClass('raised');
    }, 600);
  };

  const clearPromise = () => {
    return new Promise((resolve) => {
      const result = clearInterval();
      resolve(result);
    });
  };

  const openLensTrigger = () => {
    console.log('opening lens')
    openLens();
    // Uncomment below if needed:
    // clearPromise().then(() => {
    //   openLens();
    // });
  };

  useEffect(() => {
    // Replaces componentDidMount

    const $photo = $(photoRef.current);
    setTimeout(() => {
      $photo.addClass('showing');
      setTimeout(() => {
        openLens();
      }, 10);
    }, 10);
  }, []);

  useEffect(() => {
    // Replaces componentWillReceiveProps
    if (expanding === true) {
      show();
      openLens();
    } else {
      closeLens();
    };

    if (lens === false) {
      $('.circle div:nth-child(1)').css('color', '#fff');
      const $photo = $(photoRef.current);
      const $lens1 = $photo.children('.lens1');
      const $lens2 = $photo.children('.lens2');
      const $lens3 = $photo.children('.lens3');
      const $lens4 = $photo.children('.lens4');

      $lens1.addClass('left');
      $lens4.addClass('left');
      $lens2.addClass('right');
      $lens3.addClass('right');
    }
  }, [expanding, lens]);

  return (
    <div className="circle clearfix">
      <div className={brandClass}>{brand}</div>
      <div className="circle_holder clearfix">
        <div
          ref={photoRef}
          id={brandId}
          className="photo photo_inner"
          onMouseEnter={() => openLensTrigger()}
          onMouseLeave={() => closeLens() }
        >
          <img src={url} alt="brand_logo" className="brand_logo img-responsive" />
          <div className="lens1"></div>
          <div className="lens2"></div>
          <div className="lens3"></div>
          <div className="lens4"></div>
        </div>
      </div>
    </div>
  );
};


export default Circle;
