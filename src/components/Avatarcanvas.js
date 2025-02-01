import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const AvatarCanvas = ({ bodyModel, outfitModel }) => {
  const body = useLoader(GLTFLoader, bodyModel);
  const outfit = useLoader(GLTFLoader, outfitModel);

  const meshRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (body && outfit) {
      setLoaded(true);
    }
  }, [body, outfit]);

  return (
    <mesh ref={meshRef}>
      {loaded ? (
        <>
          {/* Render body and outfit models here */}
          <primitive object={body.scene} />
          <primitive object={outfit.scene} />
        </>
      ) : (
        <meshStandardMaterial color="grey" />
      )}
    </mesh>
  );
};

export default AvatarCanvas;
