import { OrbitControls, PositionalAudio, useGLTF } from "@react-three/drei";
import { useState } from "react";


const Speaker = ({ onClick}) => {

  const speaker = useGLTF("./model/blossoming_boombox.glb");


  return (
    <>
    <directionalLight />
    <ambientLight intensity={4} />
    <primitive 
    object={speaker.scene}
    onClick={onClick}
    
    />
    
    </>
  );
};

useGLTF.preload("./model/blossoming_boombox.glb");



const Scene = () => {

  const [play, setPlay] = useState(false);

  const clickHandler = () => {
    setPlay(!play);
  };


  return (
    <>
    <OrbitControls />
    {play && <PositionalAudio url="./sound/sound.mp3" autoplay loop distance={4} />}
    <Speaker onClick={clickHandler} />
    </>
  );
};

export default Scene;
