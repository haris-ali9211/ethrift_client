import React, { useState, useReducer, useEffect, useContext } from "react";
import { Col, Card, Container, Row, Button } from 'react-bootstrap';
import '../App.css';
import Reducer from './Reducer'
import Reducer2 from "./Reducer2";
import { useParams } from "react-router";
import ProductSkeleton from './ProductSkeleton'
import { GlobleContext } from "../Context/GlobleState";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";



const ProductDetail = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const [count, dispatch] = useReducer(Reducer, 1);
    // const [data, dispatch2] = useReducer(Reducer2,);
    const data = useReducer(Reducer2, '');

    const [price, setpice] = useState(22);
    const [disable, setDisable] = useState(false);
    const [apiData, setapiData] = useState([]);


    const dispatchRedux = useDispatch();



    useEffect(() => {

        fetch("https://e-commerce12.p.rapidapi.com/products/toprated?rating=4&page=1&limit=50", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "e-commerce12.p.rapidapi.com",
                "x-rapidapi-key": "8e54de1340msh5c27c70969fa0f9p1c55abjsnf1f932c971d3"
            }
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                
                setapiData(json);
            })
            .catch(err => {
                console.error(err);
            })


    }, [])

    const buttonDisable = () => {
        setDisable(true);
        // collectData()
    }
    const buttonActive = () => {
        setDisable(false);
        // collectData()
    }

    let { id } = useParams();
    // const product = apiData.products[id]

    // if (apiData && !apiData.products[id]) {
    // }

    // console.log("===>", apiData.products)

    const { addData } = useContext(GlobleContext);

    function giveData() {

        const newData = {
            id,
            name: apiData.products[id].name,
            img: apiData.products[id].image[0],
            price: apiData.products[id].price,
            category: apiData.products[id].category,
            color: apiData.products[id].color
        }
        addData(newData);
    }


    const handleClick = () => {
        dispatchRedux(addProduct({ products: apiData.products[id], count, price: apiData.products[id].price * count }))
    };
    // , price: apiData.products[id].price * 20 * count 
    return (
        <div>
            {apiData.products ?
                <Card className="productdetail d-flex justify-content-center ">
                    <Card.Title className="text-center p-4 productHeading">Product Detail</Card.Title>
                    <Container>
                        <Row className="p-3">

                            <Col lg={6} md={6} sm={12} className="text-center">
                                <Card.Img style={{ width: 400 }} variant="top" src={apiData.products[id].image[0]} alt="img" />
                            </Col>

                            <Col lg={6} md={6} sm={12} className="text-start p-3 productDes">

                                <div>
                                    <h2>{apiData.products[id].name}</h2>
                                    <h5><span>Category: </span>{apiData.products[id].category}</h5>
                                    <h5><span>Color: </span>{apiData.products[id].color}</h5>
                                    <p>{apiData.products[id].description}</p>
                                </div>

                                <div>
                                    <Card.Title className="text-center value">
                                        <span className="pkr p-1">PKR
                                        </span>
                                        {apiData.products[id].price}/-
                                    </Card.Title>
                                </div>

                                <div className="d-flex justify-content-around buttonProduct">
                                    <Button disabled={disable} style={{ height: 34 }}
                                        onClick={
                                            () => {
                                                dispatch('DECREMENT');
                                                if (count <= 2) {
                                                    // console.log("===> true", count);
                                                    buttonDisable();
                                                }
                                            }}

                                        variant="danger" >-</Button>


                                    <p className="p-1">{count}</p>


                                    <Button style={{ height: 34 }} onClick={
                                        () => {
                                            dispatch('INCREMENT');
                                            if (count >= 1) {
                                                // console.log("===> true", count);
                                                buttonActive();
                                            }
                                        }
                                    }
                                        variant="primary">+</Button>
                                </div>

                                <div>
                                    <div className="d-flex justify-content-center p-3">
                                        <Button variant="primary" className="button d-flex justify-content-center m-3" onClick={
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
                                        <Button variant="primary" className="button d-flex justify-content-center m-3">
                                            <div class="svg-wrapper-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                </svg>
                                            </div>
                                            <span>Buy Now</span>
                                        </Button>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Card>
                :
                <ProductSkeleton />}
        </div>
    )
}

export default ProductDetail;