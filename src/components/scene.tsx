"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stars,
  Float,
  useProgress,
  Html
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { StatueModel } from "./statue-model";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-center">
        <div className="text-xl font-bold mb-2">{progress.toFixed(0)}%</div>
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
}

export default function Scene() {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <Canvas shadows>
      <Suspense fallback={<Loader />}>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={isRotating}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          onChange={() => setIsRotating(false)}
          onEnd={() => setIsRotating(true)}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Environment and Background */}
        <Environment preset="sunset" background blur={0.8} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        
        {/* Main Statue Model */}
        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <StatueModel />
        </Float>
      </Suspense>
    </Canvas>
  );
}