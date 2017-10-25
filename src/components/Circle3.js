import React, { Component } from 'react';
import jquery from 'jquery';

class Circle3 extends Component{
  componentDidMount(){
    // const expanding = this.props.expanding;
    // console.log('expanding ',this.props.brand,': ',expanding);
    // if(expanding==true){
    //   this.openLens();
    // }else{
    //   this.closeLens();
    // }
  }
  componentWillReceiveProps(nextProps){
    const expanding = nextProps.expanding;
    // console.log('expanding ',this.props.brand,': ',expanding);
    if(expanding==true){
      this.openLens();
    }else{
      this.closeLens();
    }
    const lens = nextProps.lens;
    if(lens==false){
      jquery('.circle div:nth-child(1)').css('color','#fff');
      const id = '#'+this.props.brand+'1';
      const $photo = jquery('.photo');
      const $lens1 = $photo.children('.lens1');
      const $lens2 = $photo.children('.lens2');
      const $lens3 = $photo.children('.lens3');
      const $lens4 = $photo.children('.lens4');
      $lens1.addClass('left');
      $lens4.addClass('left');
      $lens2.addClass('right');
      $lens3.addClass('right');
    }
  }
  openLens(e){
    const id = '#'+this.props.brand+'1';
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
    const id = '#'+this.props.brand+'1';
    const $photo = jquery(id);
    const $lens1 = $photo.children('.lens1');
    const $lens2 = $photo.children('.lens2');
    const $lens3 = $photo.children('.lens3');
    const $lens4 = $photo.children('.lens4');
    const brand_class = '.'+this.props.brand;
    setTimeout(()=>{
      jquery(brand_class).removeClass('raised');
    },425)
    $photo.removeClass('bigger');
    if(this.props.lens==true){
      $lens1.removeClass('left');
      $lens4.removeClass('left');
      $lens2.removeClass('right');
      $lens3.removeClass('right');
    }
  }
  clearPromise(e){
    return new Promise((resolve)=>{
      const result = this.props.clearInterval();
      resolve(result);
    })
  }
  openLensTrigger(e){
    this.clearPromise().then((result)=>{;
      this.openLens(e);
      // this.props.clearColors();
    });
  }

  render(){
    const url = this.props.url || "../photos/react-logo-1000-transparent.png";
    const brand_class = "covered brand_title "+this.props.brand;
    const brand_id = this.props.brand+'1';
    return(
      <div className="circle clearfix">
        <div className={ brand_class }>{this.props.brand}</div>
        <div className="circle_holder clearfix">
          <div onMouseEnter={this.openLensTrigger.bind(this)} onMouseLeave={this.closeLens.bind(this)} id={brand_id} className="photo photo_inner">
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

export default Circle3;
