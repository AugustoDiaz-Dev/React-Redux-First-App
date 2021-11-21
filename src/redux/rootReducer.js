import { combineReducers } from "redux"
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import coffeeReducer from './coffee/coffeeReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    coffee: coffeeReducer,
    user: userReducer
})

export default rootReducer