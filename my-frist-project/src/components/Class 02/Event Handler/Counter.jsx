import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-x-3">
      <p className="text-3xl">Count: {count}</p>
      <button
        className="px-6 py-3 border border-violet-700 rounded-lg"
        onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button
        className="px-6 py-3 border border-violet-700 rounded-lg"
        onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
