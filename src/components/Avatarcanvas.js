import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader

const AvatarCanvas = ({ bodyModel, outfitModel }) => {
  const [bodyMesh, setBodyMesh] = useState(null);
  const [outfitMesh, setOutfitMesh] = useState(null);
  const meshRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();

    // Load body model
    loader.load(bodyModel, (gltf) => {
      setBodyMesh(gltf.scene);  // Set the loaded body model
    });

    // Load outfit model
    loader.load(outfitModel, (gltf) => {
      setOutfitMesh(gltf.scene);  // Set the loaded outfit model
    });
  }, [bodyModel, outfitModel]);

  useFrame(() => {
    // You can animate the models here if you need
  });

  return (
    <group ref={meshRef}>
      {bodyMesh && <primitive object={bodyMesh} />}
      {outfitMesh && <primitive object={outfitMesh} />}
    </group>
  );
};

export default AvatarCanvas;
