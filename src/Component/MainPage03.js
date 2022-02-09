import React from "react";
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const MainPage03 = () => {
    return (
        <Container fluid className="section-2 container-fluid p-0 cover1">
            <Row>
                <Col sm={12} md={12} lg={12} className="content col-sm-12 col-md-12 col-lg-12 text-center">
                    <h1 class="text-light">Help Center</h1>
                    <p class="text-muted">Please be informed that you may face a slight delay in delivery due to Covid
                        . Check out the update duration of delivery on the product page while placing the order</p>
                    <form class="form-inline">
                        <div class="col pl-0">
                            <div class="form1 input-group pr-5">
                                <input type="text" class="form-control bg-dark text-white" placeholder="State your question here"/>
                                <div class ="input-group-prepend">
                                <div class ="input-group-text">
                                <ArrowForwardIcon style={{ fontSize: 27 }} />
                                </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage03;