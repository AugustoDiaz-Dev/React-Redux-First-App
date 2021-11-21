import React from 'react'
import { connect } from 'react-redux'
import { buyCoffee } from '../redux'

function CoffeeContainer(props) {
    return (
        <div>
            <h2>
                Number of coffees: {props.numOfCoffees}
            </h2>
            <button onClick={props.buyCoffee}>Buy one!!!!!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCoffees: state.cofee.numOfCoffees
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCoffee: () => dispatch(buyCoffee())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    ) (CoffeeContainer)

