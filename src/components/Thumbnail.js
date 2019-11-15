import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
import './ThumbnailItem'
import ThumbnailItem from './ThumbnailItem';
class Thumbnail extends React.Component {
    render() {
        var {label,trending} = this.props;
        var trendingBig = trending[0];
        var trendingSmall = trending.slice(1, 5);
        return (
            <>
                <div >
                    <h3 className="mb-10" >{label}</h3>
                    <span><a>See more >>></a> </span>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature">
                                <a>
                                    <img src={trendingBig.image} alt={trendingBig.name} style={{ width: '100%' }} />
                                </a>
                                <h3>{trendingBig.name} </h3>
                            </div>
                            <div className="caption">
                                <div className="price">
                                    <strong>{trendingBig.price} </strong>
                                </div>
                            </div>
                        </div>
                        <ThumbnailItem trendingSmall={trendingSmall} />
                    </div>
                </div>
            </>

        );
    }
}

export default Thumbnail;
