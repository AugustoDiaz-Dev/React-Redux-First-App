import { BUY_COFFEE } from "./coffeeTypes"

const initialState = {
    numOfCoffes: 25
}

const coffeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_COFFEE: return {
            ...state, 
            numOfCoffees: state.numOfCoffees - action.payload
        }
        default: return state
    }
}

export default coffeeReducer