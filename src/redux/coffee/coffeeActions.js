import { BUY_COFFEE } from "./coffeeTypes"

export const buyCoffee = (number = 1) => {
    return {
        type: BUY_COFFEE,
        payload: number
    }
}