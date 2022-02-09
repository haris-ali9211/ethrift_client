import React from "react";
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap'
import sectionImg from '../Images/pexels-rodnae-productions-7464423.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Section01 = () => {
    return (
        <section className="section-1">
            <Container className="container text-center">
                <Row className="row">
                    <Col md={6} sm={12} className="col-md-6 col-12">
                        <div class="pray">
                            <img src={sectionImg} alt="aunty" />
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="col-md-6 col-12">
                        <div class="panel text-left">
                            {/* <h1>Flat 50% OFF, Hurry up before the stock ends</h1> */}
                            <h1>Deals to make you go crazy
                                <FavoriteIcon style={{ fontSize: 32, color: 'red' }} />
                            </h1>
                            <p class="pt-4">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iure adipisci harum
                                ducimus accusantium, repudiandae aperiam
                                voluptatum, id ex ratione omnis reiciendis possimus officiis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae, tenetur quidem
                                eum aliquid vel labore sint placeat
                                ad deserunt consectetur fugit ullam. Eius unde neque ducimus obcaecati ipsum quos vero
                                totam recusandae hic
                                expedita nemo sit, illum harum. Quisquam impedit ullam itaque facere et ad molestiae
                                quod reprehenderit excepturi!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section01;