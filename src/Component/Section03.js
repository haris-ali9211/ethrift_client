import React from "react";
import '../App.css';
import { Container, Col, Row } from 'react-bootstrap'
import DesktopMacIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Section03 = () => {
    return (
        <section className="section-3 container-fluid p-0 text-center">
            <Container >
                <Row className="row">
                    <Col md={12} sm={12} className="col-md-12 col-sm-12">
                        <h1>Download Our App for all Platform</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem alias perspiciatis
                            omnis quod possimus odit
                            voluptatum! Sunt ea quasi praesentium, tenetur doloribus animi obcaecati, sint nemo quae
                            laudantium iusto unde
                            eaque nostrum nobis voluptatum
                        </p>
                    </Col>
                </Row>
                <Row className="platform row">
                    <Col md={6} sm={12} className="col-md-6 col-sm-12 text-right">
                        <div class="desktop shadow-lg">
                            <div class="d-flex flex-row justify-content-end">
                                <DesktopMacIcon className="py-2 pr-3" style={{ fontSize: 70 }} />
                                <div class="text text-left">
                                    <h3 class="pt-1 m-0">Desktop</h3>
                                    <p class="p-0 m-0">On website</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="col-md-6 col-sm-12 text-left">
                        <div class="desktop shadow-lg">
                            <div class="d-flex flex-row justify-content-start">
                                <PhoneAndroidIcon className="py-2 pr-3" style={{ fontSize: 70 }} />
                                <div class="text text-left">
                                    <h3 class="pt-1 m-0">On Mobile</h3>
                                    <p class="p-0 m-0">On Play Store</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section03;