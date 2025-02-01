import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const AvatarCanvas = ({ bodyModel, outfitModel }) => {
  const meshRef = useRef();

  useEffect(() => {
    // Logic to load the models using three.js here (GLTFLoader, etc.)
    console.log(bodyModel, outfitModel);  // Check if models are passed correctly
  }, [bodyModel, outfitModel]);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default AvatarCanvas;
