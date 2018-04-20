import React, { Component } from 'react';
import Circle2 from './Circle2';
import Portal from './Portal';
import jquery from 'jquery';

export default class Project extends Component{
  constructor(props){
    super(props);
    this.state={
      lens:true,
      expanding:false,
      text:0,
      opacity:false,
      list:[]
    }
  }
  //preload all images for faster loading
  // componentWillMount(){
  //   let title = this.props.project.title;
  //   const list = [];
  //   if(this.props.project.images.length>0){
  //     function preloadImages(array) {
  //       console.log('preload ',array);
  //       for (var i = 0; i < array.length; i++) {
  //         var img = new Image();
  //         img.src = array[i];
  //         console.log('preloading image ',i,' - ',img);
  //         list.push(img);
  //       }
  //     }
  //     preloadImages(this.props.project.images);
  //     this.setState({
  //       list
  //     })
  //   }
  // }
  changeView(view){
    console.log('changing view');
    this.setState({
      text:view
    })
  }
  showOpacity(){
    const opacity = this.refs.opacity;
    const visit_site = this.refs.visit_site;
    if(this.state.opacity==false){
      jquery(opacity).addClass('portfolio-opacity-animated');
      jquery(visit_site).addClass('visible');
      this.setState({
        opacity:true
      })
    }else{
      jquery(opacity).removeClass('portfolio-opacity-animated');
      jquery(visit_site).removeClass('visible');
      this.setState({
        opacity:false
      })
    }
  }
  render(){
    const images = this.props.project.images || [];
    const big_images = this.props.project.big_images || [];
    let title = this.props.project.title.split('').filter((val)=>{
      return val !==' ' && val !=="'";
    }).join('')
    const loaded_images = big_images.map((img)=>{
      const loaded_style = {
        backgroundImage:'url('+img+')'
      }
      return (
        // <div>
        //   <img className='img-responsive' src={img} />
        // </div>
        <div>
          <div ref="image" className = 'portfolio-image' style ={loaded_style} alt={this.props.project.title}></div>
        </div>
      )
    });
    // console.log('currently stored: ',loaded_images)
    const default_img = (this.props.project.big_images) ? big_images[0] : '';
    const main_image={
        backgroundImage:'url('+big_images[this.state.text]+')'
      }

    const main_photo=loaded_images[this.state.text];

    let count = -1;
    let project_id='project'+this.props.number;
    let portal_id='portal'+this.props.number;
    const github = (this.props.project.github !=='') ? (
      <div className='github-url'>
        <i className = "fa fa-github"></i><a href={this.props.project.github} alt='GitHub.com'> View GitHub Repo </a>
      </div>
    ): '';
    const portals = images.map((image)=>{
      const url=image;
      const key = 'portal'+count;
      count++;
      return(
        <Portal key={key} changeView={this.changeView.bind(this)} id={portal_id+count} count={count} brand={portal_id+count} url={url} />
      )
    });
    const text = this.props.project.text[this.state.text];

    return(
      <div className='portfolio-entry link col-xs-12 col-md-12'>
        <div className='link-title'></div>
          <div className="portfolio-image-wrapper">
            <div className="image-ratio">
              <a ref='image_link' target='blank' onMouseEnter={this.showOpacity.bind(this)} onMouseLeave={this.showOpacity.bind(this)} href = {this.props.project.url} title = {this.props.project.title}>
                <div ref="opacity" className="portfolio-image-opacity"></div>
                <div className="visit_site" ref="visit_site">VISIT</div>
                {/* <div ref="image" className = 'portfolio-image' style ={main_image} alt={this.props.project.title}></div> */}
                { main_photo }
              </a>
            </div>
          </div>
          <div className='portals'>
            {portals}
          </div>
          <div className='portfolio-title'>{this.props.project.title}</div>
          { github }
          <div className='portfolio-text'>{text}</div>
        {/* <i className='fa fa-cogs' aria-hidden='true'>
        </i> */}
        {/* <Circle2 expanding={this.state.expanding} id={project_id} brand={project_id} url=""/> */}
      </div>
    );
  }
}
