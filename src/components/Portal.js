import React, { Component } from 'react';

import jquery from 'jquery';


export default class Portal extends Component{
  constructor(props){
    super(props);
    this.state={
      open:false
    }
  }
  componentWillReceiveProps(nextProps){
    // if(nextProps.closeAll==true){
    //   this.closeLens();
    // }
  }
  componentDidMount(){
    const url = this.props.url;
    const id = '#'+this.props.brand;
    const style = 'url("'+url+'")';
    jquery(id).css('background-image',style);
  }
  openLens(){
    const id = '#'+this.props.brand;
    const $port_photo = jquery(id);
    const brand_class = '.'+this.props.brand;
    jquery('.port_opened').removeClass('port_bigger');
    jquery('.port_photo').removeClass('port_opened');
    $port_photo.addClass('port_bigger');
    $port_photo.addClass('port_opened');
    this.props.changeView(this.props.count);
  }
  closeLens(){
    const id = '#'+this.props.brand;
    const $port_photo = jquery(id);
    const brand_class = '.'+this.props.brand;
    $port_photo.removeClass('port_bigger');

  }
  open(e){
    e.preventDefault();
    if(this.state.open==false){
      this.openLens();
      this.setState({
        open:true
      });
    }else{
      this.closeLens();
      this.setState({
        open:false
      });
    }
  }
  render(){
    const url = this.props.url || "../photos/react-logo-1000-transparent.png";
    const brand_id = this.props.brand;
    return(
      <div className="port_circle">
        <div className="port_circle_holder">
          <div onMouseEnter={this.open.bind(this)} onTouchStart={this.open.bind(this)} onMouseLeave={this.open.bind(this)} id={brand_id} className="port_photo port_photo_inner">
            {/* <img src={url} alt="port_brand_logo" className="port_brand_logo img-responsive" /> */}
          </div>
        </div>
      </div>
    );
  }
}
