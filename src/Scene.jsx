import { OrbitControls, PositionalAudio, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";


const Speaker = ({ onDoubleClick }) => {

  const speaker = useGLTF("./model/blossoming_boombox.glb");


  const animations = useAnimations(speaker.animations, speaker.scene)

  // console.log(speaker);
  // console.log(animations);

  useEffect(() => {
    animations.actions.Animation.play();
  }, []);
  return (
    <>


    <directionalLight />
    <ambientLight intensity={4} />
    <primitive 
    object={speaker.scene}
    onDoubleClick={onDoubleClick}
    
    />
    
    </>
  );
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
    <Speaker onDoubleClick={clickHandler}  />
    </>
  );
};

export default Scene;
