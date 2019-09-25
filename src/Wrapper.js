import React, { useState } from "react";
import Component from "./Component";

const Wrapper = (props) => {
  const [showElement, setShowElement] = useState(true);

  return (
    <>
      <button onClick={() => setShowElement(!showElement)}>Click me</button>
      {showElement && <Component />}
    </>
  )
}

export default Wrapper;
