import React, { useEffect } from "react";

const Component = () => {
  useEffect(() => {
    console.log("Mount")
  }, [])

  return <h1>Hello World</h1>;
}

export default Component;