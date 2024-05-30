import { OrbitControls, PositionalAudio, useGLTF } from "@react-three/drei";
import React, { useState } from "react";


const Speaker = ({ onClick }) => {

  const speaker = useGLTF("./model/studio.glb");

  // Este componente não deve ser remontado quando o estado `play` mudar, então usamos React.memo
  return React.useMemo(() => (
    <>
      <directionalLight />
      <ambientLight intensity={4} />
      <primitive 
        object={speaker.scene}
        position-y={-1}
        onClick={onClick}
      />
    </>
  ), [onClick, speaker.scene]);
};


const Scene = () => {

  const [play, setPlay] = useState(false);

  const clickHandler = () => {
    setPlay(!play);
  };

  return (
    <>
      <OrbitControls />
      {play && <PositionalAudio url="./sound/KEROSENE.mp3" autoplay loop distance={2} />}
      <Speaker onClick={clickHandler} />
    </>
  );
};

useGLTF.preload("./model/studio.glb");

export default Scene;
