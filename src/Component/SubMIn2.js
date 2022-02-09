import React, { useState, useEffect, useReducer } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import Groups from './Groups'
import Card from './Card'
import Reducer from './Reducer'
import axios from 'axios'


const SubMin2 = ({ cat, filters, sort }) => {

    // console.log("+++>",cat, filters,sort)


    const [apiData, setapiData] = useState([]);
    const [apiLength, dispatch] = useReducer(Reducer, 9);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
                console.log("===>", res.data)
            } catch (err) { }
        };
        getProducts();
    }, [cat]);

    // useEffect(() => {
    //     cat &&
    //         setFilteredProducts(
    //             products.filter((item) =>
    //                 Object.entries(filters).every(([key, value]) =>
    //                     item[key].includes(value)
    //                 )
    //             )
    //         );
    //     console.log(filteredProducts)
    // }, [products, cat, filters]);

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

    return (
        <Container>
            <Row>
                {apiData.products
                    ? apiData.products.slice(0, apiLength).map((apiObj, key) => {
                        const index = String(key)
                        console.log(apiData.products[key])
                        return (

                            <Card
                                keys={index}
                                des={apiObj.description}
                                id={apiObj._id}
                                img={apiObj.image[0]}
                                price={apiObj.price}
                                ratings={apiObj.ratings}
                                category={apiObj.category}
                                name={apiObj.name}
                                data={apiData.products[key]}
                            />
                        )
                    })
                    : <Groups />
                };
            </Row>
            <Row>
                <Col>

                    {apiData.products && apiData.products.length >= apiLength ?

                        <Button variant="danger" className="p-2 m-2" onClick={
                            () => {
                                dispatch('INCREMENT_BY_5');
                                // console.log("===>", apiData.products.length)
                                // console.log("===>", apiLength)
                            }
                        } >Load More
                        </Button> : null}

                </Col>
            </Row>
        </Container>
    )
}

export default SubMin2;