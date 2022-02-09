import React, { useReducer, useContext, useState } from "react";
import { Col, Card, Button } from 'react-bootstrap';
import '../App.css';
import Rating from './Rating'
import { Link } from "react-router-dom";
import { GlobleContext } from "../Context/GlobleState";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";




const CardDisplay = ({ keys, data, img, price, ratings, category, name, des }) => {

    const { addData } = useContext(GlobleContext);
    const count = useState(1)
    // const dispatch = useDispatch();

    function giveData() {

        const newData = {
            keys,
            name,
            img,
            price,
            category
        }
        
        addData(newData);
    }
    // console.log("====>", data)

    const dispatchRedux = useDispatch();
    const handleClick = () => {
        dispatchRedux(addProduct({ products: data, count, price }))
    };

    // const handleClick = () => {
    //     dispatch(
    //       addProduct({ ...product })
    //     );
    //   };


    return (
        <Col sm={12} md={6} lg={4} className="d-flex justify-content-around col-sm-12 col-md-6 col-lg-4 " >
            <Card style={{ width: '22rem' }}>
                <div className="d-flex justify-content-center prorductBox">
                    <Link to={`/ProductDetail/${keys}`} style={{ textDecoration: "none" }}>
                        <Card.Img variant="top" className="prorductDisplay" src={img}
                        />
                    </Link>
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="p-0 m">
                        {category}
                    </Card.Text>
                    <Rating rate={ratings} />
                    <Card.Title className="p-3 value">
                        <span className="pkr p-1">PKR
                        </span>
                        {price}
                    </Card.Title>

                    <div className="d-flex justify-content-between">
                        <Button variant="primary" className="button d-flex justify-content-center" onClick={
                            () => {
                                giveData()
                                handleClick()
                            }}>
                            <div class="svg-wrapper-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </div>
                            <span>At to Cart</span>
                        </Button>
                        <Button variant="primary" className="button d-flex justify-content-center">
                            <div class="svg-wrapper-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </div>
                            <span>Buy Now</span>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}


export default CardDisplay;