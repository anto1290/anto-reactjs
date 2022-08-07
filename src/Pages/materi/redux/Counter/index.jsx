import { useDispatch, useSelector } from "react-redux"
import { decrementWithCheckAction, Increment } from "../../../../App/feature/Counter/action";

const Counter = () => {
    let { count } = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const style = {
        padding: '8px 12px'
    }
    return (
        <div style={{ display: 'flex', width: '96vw', height: '90vh', alignItems: 'center', justifyContent: 'center' }}>
            <main style={{ margin: 0, display: 'block', textAlign: 'center' }}>
                <h1>Counter Angka With Redux</h1>
                <h2 style={{ fontSize: '24px' }}>
                    <button onClick={() => dispatch(decrementWithCheckAction(1))} style={style}>-</button>
                    {'  '}<span>{count}</span>{'  '}
                    <button onClick={() => dispatch(Increment(1))} style={style}>+</button>
                </h2>
            </main>
        </div>
    )
}

export default Counter
