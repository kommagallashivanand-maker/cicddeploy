// import { useState } from "react";

// function Counter() {
//   // state variable and function to update it
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button>
//     </div>
//   );
// }

// export default Counter;



function Counter() {
  let count = 0;

  function increase() {
    count = count + 1;
    console.log(count); // value changes in console
  }

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Counter;

