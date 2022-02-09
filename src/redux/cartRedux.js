import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price;
        },
        deleteProduct: (state, action) => {
            // console.log(action.payload)
            // console.log(state.products)
            state.products.filter( item => {
                if (item.products._id === action.payload) {
                    console.log("-->",item.products.price)
                    state.total -= item.products.price
                }
            })
            state.quantity -= 1  
            // state.total -= state.products.price;
            const modifiedCart = state.products.filter(item => item.products._id !== action.payload)
            state.products = modifiedCart
        }

    },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;



