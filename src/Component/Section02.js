import React from "react";
import '../App.css';
import { Container } from 'react-bootstrap'

const Section02 = () => {
    return (
        <section>
            <Container fluid className="section-2 container-fluid p-0">
            <div class="cover">
                <div class="content text-center">
                    <h1>Some Feature That Made Us Unique🌌</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, a?</p>
                </div>
            </div>
            <div class="container-fluid text-center">
                <div class="numbers d-flex flex-md-row flex-wrap justify-content-center">
                    <div class="rect">
                        <h1>229</h1>
                        <p>TOTAL ORDER</p>
                    </div>
                    <div class="rect">
                        <h1>84</h1>
                        <p>5 STARS RATING</p>
                    </div>
                    <div class="rect">
                        <h1>02</h1>
                        <p>TOTAL BRANCH</p>
                    </div>
                    <div class="rect">
                        <h1>152</h1>
                        <p>TOTAL EMPLOY</p>
                    </div>
                </div>
            </div>
            </Container>
        </section>
    )
}

export default Section02;