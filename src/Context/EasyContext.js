import React, { useState, useEffect, createContext, useContext } from 'react';


const Context = createContext();

const CryptoContext = ({ children }) => {
    

    const insitiatState = {
        atCartData: [
            { id: 22, name: 'haris', price: 33, des: 'confuse' },
            { id: 23, name: 'haris', price: 33, des: 'confuse' },
            { id: 24, name: 'haris', price: 33, des: 'confuse' },
            { id: 25, name: 'haris', price: 33, des: 'confuse' }
        ]
    }
    
    return (
        <Context.Provider value={{insitiatState}}>
            {children}
        </Context.Provider>
    )
}

export default CryptoContext;

export const CryptoState = () => {
  return  useContext(Context);
}