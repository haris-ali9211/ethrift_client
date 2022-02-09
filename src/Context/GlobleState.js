import React, { createContext, useReducer } from 'react';
import Reducer2 from '../Component/Reducer2';

//Creat the initial state

const insitiatState = {
    atCartData: [
        // { keys: 0, name : 'name1', img: 'https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg', price: 33, des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip' },
        // { keys: 1, name : 'name2', img: 'https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg', price: 33, des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip' },
        // { keys: 2, name : 'name3', img: 'https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg', price: 33, des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip' },
        // { keys: 3, name : 'name4', img: 'https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg', price: 33, des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip' }
    ]
}

// create globle Context
export const GlobleContext = createContext(insitiatState)


// create a provider for Globle Context
const GlobleProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer2, insitiatState);

    // Action for  cart

    function deleteData(id){
        dispatch({
            type: 'DELETE_DATA',
            payload: id
        });
    }

    function addData(atCartData){
        dispatch({
            type: 'ADD_DATA',
            payload: atCartData
        })
    }

    return (

        <GlobleContext.Provider value={
            {
                atCartData: state.atCartData,
                deleteData,
                addData
            }
        }>
            {children}
        </GlobleContext.Provider>
    );
}
export default GlobleProvider;