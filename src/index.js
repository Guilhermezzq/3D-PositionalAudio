import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.4,
        far: 30,
        position: [1, -2, 15],
      }}
    >
      <Scene />
    </Canvas>
  </>
);
