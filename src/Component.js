import React, { useEffect, useState } from "react";
import Test from "./Test";

const Component = (props) => {
  useEffect(() => {
    console.log("Mount")
    return () => console.log("Unmount")
  }, [])

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <div>{count}</div>
      <Test />
    </>
  )
}

export default Component;
