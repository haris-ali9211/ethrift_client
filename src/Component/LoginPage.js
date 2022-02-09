import React from "react";
import '../App.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
    return (
        <Container fluid className="login ">
            <Row>
                <Col className="page">
                    <div className="containerlog login">
                        <div id="header">
                            <h1>Welcome to.</h1>
                            <h1 className="thrift"><ShoppingCartIcon style={{ fontSize: 30, marginBottom: 3}}>logo</ShoppingCartIcon>E-THRIFT</h1>
                        </div>
                        <div id="loginform">
                            <div className="containerfield">
                                <input type="email" placeholder="Email Address" /><input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" defaultValue="Login" />
                        </div>
                        <div className="footer">
                            <p><a href="#">Signup</a> for a new Account</p>
                            <p> OR</p>
                            <div id="loginform" className="d-flex row justify-content-around">
                                <Button variant="primary" className="p-2 m-2">
                                    <FacebookIcon style={{ fontSize: 20,  marginBottom:3 }}>logo</FacebookIcon>Login as Facebook
                                </Button>
                                <Button variant="danger" className="p-2 m-2">
                                    <GoogleIcon style={{ fontSize: 19, marginBottom:2 }}>logo</GoogleIcon>Login as Google
                                </Button>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default LoginPage;




