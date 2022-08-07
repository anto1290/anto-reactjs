import * as counter from './constant'

const Increment = (value) => {
    return {
        type: counter.INC,
        value: value
    }
}

const Decrement = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}

const decrementWithCheckAction = (value) => {
    return (dispatch, getState) => {
        if (getState().counter.count > 0) {
            dispatch(Decrement(value))
        }
    }
}

export { Increment, decrementWithCheckAction }

