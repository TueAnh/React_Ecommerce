import React from 'react';
import { increaseIndex } from '../actions';
class Carousel extends React.Component {
    
    render() {
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
                <button className="left carousel-control" disabled={disabledPre} onClick={this.controlPre}>
                    <span className="glyphicon glyphicon-chevron-left" />
                    <span className="sr-only">Previous</span>
                </button>
                <button className="right carousel-control" disabled={disabledNext} onClick={this.controlNext}  >
                    <span className="glyphicon glyphicon-chevron-right" />
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
    }
}

export default Carousel;
