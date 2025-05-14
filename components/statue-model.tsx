"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { Mesh, Vector3 } from "three";

export function StatueModel() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const targetPosition = new Vector3(0, hovered ? 0.2 : 0, 0);
  const currentPosition = new Vector3();
  const targetScale = new Vector3(hovered ? 1.1 : 1, hovered ? 1.1 : 1, hovered ? 1.1 : 1);
  const currentScale = new Vector3(1, 1, 1);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth position transition
      currentPosition.lerp(targetPosition, 0.1);
      meshRef.current.position.copy(currentPosition);
      
      // Smooth scale transition
      currentScale.lerp(targetScale, 0.1);
      meshRef.current.scale.copy(currentScale);
      
      // Gentle rotation
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={1}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        thickness={0.5}
        chromaticAberration={0.2}
        anisotropy={0.5}
        distortion={0.5}
        distortionScale={0.1}
        temporalDistortion={0.1}
        metalness={0.1}
        attenuationDistance={0.5}
        color={hovered ? "#ffffff" : "#cccccc"}
      />
    </mesh>
  );
}