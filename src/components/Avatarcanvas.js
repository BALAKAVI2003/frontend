import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Avatar = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} position={[0, -1, 0]} />;
};

const Outfit = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} position={[0, -1, 0]} />;
};

export const AvatarCanvas = ({ bodyModel, outfitModel }) => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Avatar modelPath={bodyModel} />
        {outfitModel && <Outfit modelPath={outfitModel} />}
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};