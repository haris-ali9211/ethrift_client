import React, { useState, useReducer, useContext } from "react";
import { Col, Row, Button } from 'react-bootstrap';
import '../App.css';
import Reducer from './Reducer'
import { GlobleContext } from "../Context/GlobleState";
import MaterialButton from './MaterialButton'
import { deleteProduct } from '../redux/cartRedux'
import { useDispatch } from "react-redux";



const CardHistory = ({ quantity, id, name, img, cost, des, color }) => {

    const [count, dispatch] = useReducer(Reducer, quantity);
    const price = useState(22);
    const [disable, setDisable] = useState(false);

    const buttonDisable = () => {
        setDisable(true);
    }
    const buttonActive = () => {
        setDisable(false);
    }

    console.log("===>", quantity)

    const { deleteData } = useContext(GlobleContext);

    const dispatch1 = useDispatch();


    return (

        <Row className="d-flex justify-content-around p-2 cardHis">
            <Col lg={6} md={6} className="d-flex text-start">
                <img src={img} style={{ width: 160 }} alt="img" />
                <div className="m-2">
                    <h6 className="bold">{name}</h6>
                    <p><span className="bold1">Category: </span>{des}</p>
                    <p><span className="bold1">Color: </span>{color}</p>
                    <p><span className="bold1">ID: </span>{id}</p>
                    <Button size="sm" variant="danger" onClick={() => dispatch1(deleteProduct(id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                    </Button>
                    {/* <MaterialButton/> */}
                </div>

            </Col>

            <Col lg={2} md={2} className="d-flex justify-content-center cartPrice">
                {/* <span className=">PKR </span>*/}
                <p>{cost}/-</p>

            </Col>

            <Col lg={2} md={2} className="d-flex justify-content-around cartButton">
                <Button disabled={disable} style={{ height: 34 }}
                    onClick={
                        () => {
                            dispatch('DECREMENT');
                            if (count <= 2) {
                                console.log("===> true", count);
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
            </Col>

            <Col lg={2} md={2} className="d-flex justify-content-center cartPrice">
                {/* <span className=">PKR </span>*/}
                <p>{cost * count}/-</p>

            </Col>


        </Row>

    )
}

export default CardHistory;