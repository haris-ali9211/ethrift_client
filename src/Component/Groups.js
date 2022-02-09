import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import Skeleton from './Skeleton';

const Groups = () => {
    return (
        <Container>
            <Row>
                <Col lg={4} md={4} sm={12} >
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </Col>
                <Col lg={4} md={4} sm={12} >
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </Col>
            </Row>
        </Container>
    )
}

export default Groups;