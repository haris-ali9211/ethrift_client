import React from "react";
import { Carousel} from 'react-bootstrap';
import '../App.css';
import carouselPic1 from '../Images/web banner-02-01.png'
import carouselPic2 from '../Images/web banner-03-01.png'
import carouselPic3 from '../Images/web banner-01.png'


const OrderpageCarousel = () => {
    return (
        <Carousel fluid className="carousel">
            <Carousel.Item interval={800}>
                <img
                    className="d-block w-100 carImg"
                    src={carouselPic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={800}>
                <img
                    className="d-block w-100 carImg"
                    src={carouselPic2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={800}>
                <img
                    className="d-block w-100 carImg"
                    src={carouselPic3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default OrderpageCarousel;