import React, { Component } from 'react';
import jquery from 'jquery';
let breathe = '';

class Circle2 extends Component{
  constructor(props){
    super(props);
    this.state={
      open:false
    }
  }
  componentDidMount(){
    breathe = setInterval(()=>{
      this.breathe();
    },10000);
  }
  breathe(){
    this.openLens();
    setTimeout(()=>{
      this.closeLens();
    },2000);
  }
  openLens(e){
    const id = '#'+this.props.brand;
    const $photo = jquery(id);
    const $lens1 = $photo.children('.lens1');
    const $lens2 = $photo.children('.lens2');
    const $lens3 = $photo.children('.lens3');
    const $lens4 = $photo.children('.lens4');
    const brand_class = '.'+this.props.brand;
    jquery(brand_class).addClass('raised');
    $photo.addClass('bigger');
    $lens1.addClass('left');
    $lens4.addClass('left');
    $lens2.addClass('right');
    $lens3.addClass('right');
  }
  closeLens(e){
    const id = '#'+this.props.brand;
    const $photo = jquery(id);
    const $lens1 = $photo.children('.lens1');
    const $lens2 = $photo.children('.lens2');
    const $lens3 = $photo.children('.lens3');
    const $lens4 = $photo.children('.lens4');
    const brand_class = '.'+this.props.brand;
    jquery(brand_class).removeClass('raised');
    $photo.removeClass('bigger');
    $lens1.removeClass('left');
    $lens4.removeClass('left');
    $lens2.removeClass('right');
    $lens3.removeClass('right');

  }
  clear(e){
    e.preventDefault();
    clearInterval(breathe);
    for(let val in this.state){
      if(this.state[val]==true){
        this.setState({
          [val]:false
        });
      }
    };
  }
  render(){
    const url = this.props.url || "../photos/react-logo-1000-transparent.png";
    const brand_id = this.props.brand;
    return(
      <div className="circle">
        <div className="circle_holder">
          <div onClick={this.clear.bind(this)} id={brand_id} className="photo2 photo_inner">
            <img src={url} alt="brand_logo" className="brand_logo img-responsive" />
            <div className="lens1"></div>
            <div className="lens2"></div>
            <div className="lens3"></div>
            <div className="lens4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Circle2;
