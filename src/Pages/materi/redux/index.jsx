import { Provider } from "react-redux"
import store from "../../../App/store"
import Counter from "./Counter"

const Redux = () => {
    return (
        <div>
            <Provider store={store} >
                <Counter />
            </Provider>
        </div>
    )
}

export default Redux