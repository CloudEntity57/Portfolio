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
      text:0
    }
  }
  clearColors(){
  }
  clearInterval(){
  }
  changeView(view){
    console.log('changing view');
    const images = this.props.project.big_images || [];
    const image = 'url('+images[view]+')';
    jquery(this.refs.image).css('background-image',image);
    this.setState({
      text:view
    })
  }
  render(){
    // let props = {
    //   clearColors:()=> this.clearColors(),
    //   clearInterval:()=> this.clearInterval(),
    //   lens:this.state.lens
    // }
    const images = this.props.project.images || [];
    const big_images = this.props.project.big_images || [];
      const main_image={
        'background-image':'url('+big_images[this.state.text]+')'
      }
    let count = -1;
    let project_id='project'+this.props.number;
    let portal_id='portal'+this.props.number;
    const portals = images.map((image)=>{
      const url=image;
      count++;
      return(
        <Portal changeView={this.changeView.bind(this)} id={portal_id+count} count={count} brand={portal_id+count} url={url} />
      )
    });
    const text = this.props.project.text[this.state.text];

    return(
      <div className='portfolio-entry link col-xs-12 col-md-12'>
        <div className='link-title'></div>
          <div className="portfolio-image-wrapper">
            <div className="image-ratio">
              <a href = {this.props.project.url} title = {this.props.project.title}>
                <div className="portfolio-image-opacity"></div>
                <div ref="image" className = 'portfolio-image' style ={main_image} alt={this.props.project.title}></div>
              </a>
            </div>
          </div>
          <div className='portals'>
            {portals}
          </div>
          <div className='portfolio-title'>{this.props.project.title}</div>
          <div className='portfolio-text'>{text}</div>
        {/* <i className='fa fa-cogs' aria-hidden='true'>
        </i> */}
        {/* <Circle2 expanding={this.state.expanding} id={project_id} brand={project_id} url=""/> */}
      </div>
    );
  }
}
