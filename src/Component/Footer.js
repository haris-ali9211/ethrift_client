import React from "react";
import '../App.css';
import { Container, Col, Row } from 'react-bootstrap'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer>
            <Container fluid className="containeer-fluid p-0">
                <Row className="row text-left">

                    <Col className="col-md-5 col-sm-1">
                        <h1 class="text-light">About Us</h1>
                        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores
                            facere nesciunt quisquam quae qui.
                        </p>
                        <p class="pt-4 text-mute">Copyright © 2020 E-thrift Inc. All rights reserved. <span>Haris Ali
                        </span></p>
                    </Col>

                    <Col className="col-md-5">
                        <h4 class="text-light">Newsletter</h4>
                        <p class="text-muted">Stay Updated</p>
                        <form class="form-inline">
                            <div class="col pl-0">
                                <div class="input-group pr-5">
                                    <input type="text" class="form-control bg-dark text-white" placeholder="Email" />
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <ArrowForwardIcon style={{ fontSize: 25 }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Col>

                    <Col className="col-md-2 col-sm-12">
                        <h4 class="text-light">Follow Us</h4>
                        <p class="text-muted">Let us be social</p>
                        <div class="column">
                            <FacebookIcon sx={{ color: '#dd2476', m: 1 }} />
                            <TwitterIcon sx={{ color: '#dd2476', m: 1 }} />
                            <LinkedInIcon sx={{ color: '#dd2476', m: 1 }} />
                            <InstagramIcon sx={{ color: '#dd2476', m: 1 }} />
                            <WhatsAppIcon sx={{ color: '#dd2476', m: 1 }} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer;