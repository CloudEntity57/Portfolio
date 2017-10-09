import React, { Component } from 'react';
import jquery from 'jquery';

export default class Fibonacci extends Component{
  constructor(props){
    super(props);
    this.state={
      fib:true
    }
  }
  componentWillReceiveProps(nextProps){
    const num = nextProps.size;
    const unit = nextProps.unit;
    const fib_int = 1.619
    const size = (num/fib_int).toString()+unit;
    const size_int=(num/fib_int);
    // console.log(this.props.iteration,'new size: ',size);
    const iteration = this.props.iteration;
    const id_curve = '#curve'+iteration;
    const id_sq_wrapper = '#sq_wrapper'+iteration;
    const id_fib_rectangle = '#fib_rectangle'+iteration;
    const id_fib_rotate = '#fib_rotate'+iteration;
    const fib_rect_width = (size_int*fib_int).toString()+unit;
    // console.log('rect width: ',fib_rect_width);
    this.setState({
      size:size_int
    });
    jquery(id_curve).css({
      'width':size,
      'height':size
    });
    jquery(id_fib_rectangle).css({
      'width':fib_rect_width,
      'height':size
    });
    // jquery(id_fib_rotate).addClass('fib_90deg');
  };

  render(){
    let iteration = this.props.iteration;
    const spins = this.props.spins;
    if( iteration > spins ){
      return (<div className="hidden"></div>);
    }
    const size = (this.state.size) ? this.state.size : 0;
    const unit = this.props.unit;
    // console.log('size for ',iteration,': ',size);
    iteration++;
    const id_curve = 'curve'+iteration;
    const id_sq_wrapper = 'sq_wrapper'+iteration;
    const id_fib_rectangle = 'fib_rectangle'+iteration;
    const id_fib_rotate = 'fib_rotate'+iteration;
    return(
      <div className="fib_holder">
        <div id={id_fib_rectangle} className="fib_rectangle">
          <div id={id_sq_wrapper} className="square-wrapper">
            <div className="square">
                <div id={id_curve} className="fib_curve"></div>
            </div>
          </div>
          <div className="fib_90deg_holder">
            <div id={id_fib_rotate} className="rotator fib_90deg">
              <div className="inner_fib_holder">
                <Fibonacci size={size} unit={unit} spins = {spins} iteration={ iteration }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
