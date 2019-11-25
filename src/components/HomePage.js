import React from 'react'
import CarouselContainer from './../containers/CarouselContainer'
import ImageBar from './ImageBar'
import TrendingCarouselContainer from './../containers/TrendingCarouselContainer'
import ThumbnailContainer from './../containers/ThumbnailContainer'
import Footer from './../components/Footer'
export default class HomePage extends React.Component {
    render() {
        return (
            <div className = "App">
                <CarouselContainer/>
                <ImageBar/>
                <TrendingCarouselContainer />
                <ThumbnailContainer />
                <Footer />
            </div>
        )
    }
}