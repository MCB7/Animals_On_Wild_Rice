import React from "react";
import Canvas from "./Canvas"; // Change the path according to the directory structure of your project

const draw = (context) => {
  context.fillStyle = "rgb(200, 0, 0)";
  context.fillRect(10, 10, 50, 50);

  context.fillStyle = "rgba(0, 0, 200, 0.5)";
  context.fillRect(30, 30, 50, 50);
}; // Example taken from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

function App() {
  return <Canvas draw={draw} height={100} width={100} />;
}

export default App;