
import { increment } from '../store/actions/counterSlice'
import { useAppSelector, useAppDispatch } from '../hooks'

function Counter() {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(increment())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
export default Counter