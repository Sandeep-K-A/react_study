import useCounterStore from "../store/counterStore";

function Counter() {
    console.log("counter")
    const count = useCounterStore((state) => state.count);
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg border p-6 text-center">
                <h1 className="mb-4 text-3xl font-bold">
                    Count: {count}
                </h1>

                <div className="flex gap-4">
                    <button
                        onClick={decrement}
                        className="rounded bg-red-500 px-4 py-2 text-white"
                    >
                        Decrement
                    </button>

                    <button
                        onClick={increment}
                        className="rounded bg-green-500 px-4 py-2 text-white"
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;