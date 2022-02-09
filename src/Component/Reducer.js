

const Reducer = (state, action) => {

    switch (action)
    {

        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'INCREMENT_BY_5':
            return state + 6
        // case 'API_DATA':
        //     return state
        default:
            throw new Error()

    }
}

export default Reducer;