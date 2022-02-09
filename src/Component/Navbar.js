import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';
import { Link } from "react-router-dom";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../redux/userRedux";



const Header = () => {

    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();

    const signout = () => {
        { alert("Are you Sure you want to Logout") }
        dispatch(logout());
        // history.push("/login")
    }


    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" style={{ textDecoration: "none" }}>
                    {/* <Navbar.Brand href="#home" className="logo"><ShoppingCartSharpIcon style={{ fontSize: 22 }}>logo</ShoppingCartSharpIcon>E-THRIFT</Navbar.Brand> */}
                    <Navbar.Brand href="#home" className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 7 }} width="26" height="20" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                        E-THRIFT
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link to="/MainPage02" style={{ textDecoration: "none" }}>
                            <Nav.Link href="Order">Order Now</Nav.Link>
                        </Link>

                        <Link to="/MainPage03" style={{ textDecoration: "none" }}>
                            <Nav.Link href="Customer">Customer Care</Nav.Link>
                        </Link>

                        <Link to="/Cartpage" style={{ textDecoration: "none" }}>
                            {/* <Nav.Link href="Cart">Cart{quantity} */}
                            <Nav.Link href="Cart">Cart
                                {
                                    quantity == 0
                                        ?
                                        null
                                        :
                                        <sup>
                                            <span class="badge badge-light" style={{ margin: "none", padding: "none" }}>{quantity}</span>
                                        </sup>
                                }
                                {/* <span className=" text-white bg-dark p-1">
                                    {quantity}
                                </span> */}

                                {/*  <span class="sr-only">{quantity}</span> */}


                            </Nav.Link>
                        </Link>

                        <Link to="/SignIn" style={{ textDecoration: "none" }}>
                            {user ?
                                <Link to="/SignIn" style={{ textDecoration: "none" }}>
                                    <Nav.Link href="#deets" onClick={signout}>SignOut</Nav.Link>
                                </Link>
                                : <Nav.Link href="#deets">SignIn</Nav.Link>}
                        </Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;