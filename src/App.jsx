import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (  //counter  done
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;