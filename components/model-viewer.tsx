"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";

export function ModelViewer() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment="sunset" intensity={0.5}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Stage>
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}