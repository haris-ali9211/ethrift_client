    

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_DATA':
            console.log(atCartData => atCartData.id)
            return {
                ...state,
                atCartData: state.atCartData
                    .filter(atCartData => atCartData.keys !== action.payload)
            }
        case 'ADD_DATA':
            return {
                ...state,
                atCartData: [action.payload, ...state.atCartData]
            }
        default:
            throw new Error()
    };
}