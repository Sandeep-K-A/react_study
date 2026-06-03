import { useDispatch, useSelector } from "react-redux"
import { clearCounter, decrement, increment, incrementByAmount } from "../features/counter/counterSlice"

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="rounded-lg bg-white p-6 shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => dispatch(decrement())}
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                        Decrement
                    </button>

                    <button
                        onClick={() => dispatch(increment())}
                        className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => dispatch(incrementByAmount(10))}
                        className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                    >
                        Increment by 10
                    </button>
                    <button
                        onClick={() => dispatch(clearCounter())}
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                        Clear counter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter