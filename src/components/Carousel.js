import React from 'react';
import { increaseIndex } from '../actions';
import { setInterval } from 'timers';
class Carousel extends React.Component {
    interval = 0;

    componentDidMount() {
        if(this.props.check == 0)
            this.interval = setInterval (this.controlNext, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        var styleRight = {
            top: "40%",
            left: "20%"
        }
        var styleLeft = {
            top: "40%",
            left: "40%"
        }
        var styleBtnRight = {
            left: "10%"
        }
        var styleBtnLeft = {
            right: "10%"
        }

        var disabledPre = false;
        var disabledNext = false;
        if (this.props.index === 0) {
            disabledPre = true;
        } 
        if (this.props.index === this.props.length - 1) {
            disabledNext = true;
        }
        return (
            <div className="owl-one carousel slide " >
                <div className="carousel-inner">
                    {this.props.children}
                </div>
                {/* Left and right controls */}
                <button className="left carousel-control" disabled={disabledPre} onClick={this.controlPre} style ={styleBtnRight} >
                    <span className="glyphicon glyphicon-chevron-left" style = {styleLeft}/>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="right carousel-control" disabled={disabledNext} onClick={this.controlNext} style ={styleBtnLeft} >
                    <span className="glyphicon glyphicon-chevron-right" style = {styleRight} />
                    <span className="sr-only">Next</span>
                </button>
            </div>
        );
    }
    controlPre = () => {
        this.props.reduction();
    }
    controlNext = () => {
        this.props.increase();
        // this.setState = {
        //     interval: ""
        // }
    }
}

export default Carousel;
