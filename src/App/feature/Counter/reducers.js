import * as counter from './constant'

let initialState = {
    count: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case counter.INC:
            return {
                ...state,
                count: state.count + 1
            }
        case counter.DEC:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export default CounterReducer;