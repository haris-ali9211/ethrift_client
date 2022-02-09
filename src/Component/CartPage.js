import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Card } from 'react-bootstrap';
import '../App.css';
import CardHistory from "./CardHistory";
import { GlobleContext } from "../Context/GlobleState";
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from "../RequestMethod";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../redux/apiCalls";


const KEY = process.env.REACT_APP_STRIPE;

const Cartpage = () => {

    const { atCartData } = useContext(GlobleContext);
    // console.log(atCartData[0].img)

    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user.currentUser);
    const [stripeToken, setStripeToken] = useState(null);
    const [order, setOrder] = useState([]);
    const array = []
    let navigate = useNavigate();
    // console.log("===>", cart.products)

    const puch = (res) => {
        console.log(res.data)
        navigate("/success", { data: res.data
            // state: {
            //     stripeData: res.data,
            //     products: cart,
            // }
        });
    };

    const pushUpper = () => {
        // navigate("/success", { cart: cart });
        navigate("/success", {
            state: {
                stripeData: null,
                products: cart,
            }
        });
        // console.log("===>", stripeData, products)
    };

    const onToken = (token) => {
        setStripeToken(token);
    };


    useEffect(() => {


        cart?.products?.map((item)=>{
            array.push({
                productId : item._id,
                quantity : 1,
            
            })
        })

        setOrder({
            userId : user._id,
            products : array,
            amount : cart.total
        })

        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart?.total * 100,
                });
                    addOrder(order);
                navigate('/success',{data:res.data});   
                console.log(res.data)
            } catch (err) {
                alert("Something went wrong")
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart?.total, navigate]);

    return (
        <Container className="p-5 cartPage">
            <Row className="p-3">
                <Col className="text-center">
                    <h1>
                        Your Cart
                    </h1>
                </Col>
            </Row>

            <Row>

                {/* <CardHistory key={atCartData.id} name={atCartData[0].name}/> */}
                <Col >
                    <Row sm={12} md={12} lg={12}>
                        {cart.products <= 0
                            ? null
                            : <div>
                                <div className="p-3 d-flex justify-content-end">
                                    <button class="checkout noselect"
                                        onClick={pushUpper}>
                                        <span class="text">Payup</span><span class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                                                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>}
                    </Row>


                    {cart.products <= 0
                        ? <h4 className="text-center">Your Cart is empty</h4>
                        : cart.products.map((data, key) => {
                            console.log("--->", cart.total)
                            return (
                                <div>
                                    <Card>
                                        <CardHistory
                                            key={key}
                                            id={data.products._id}
                                            name={data.products.name}
                                            img={data.products.image}
                                            cost={data.products.price}
                                            des={data.products.category}
                                            color={data.products.color}
                                            quantity={data.count >= 1 ? data.count : data.count[0]}
                                        />
                                    </Card>
                                </div>
                            )
                        })}
                </Col>

            </Row>
            <Row className="border-top border-dark">
                <div className="d-flex justify-content-between">
                    <div className="p-3">

                        <StripeCheckout
                            name="E-thrift"
                            // image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button class="checkout noselect">
                                <span class="text">Payup</span><span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </span>
                            </button>

                        </StripeCheckout>

                    </div>
                    <div>
                        <h2 className="p-3">Total{cart.total}/-</h2>
                    </div>
                </div>
            </Row>

        </Container>
    )
}

export default Cartpage;