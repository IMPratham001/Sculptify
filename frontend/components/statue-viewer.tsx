"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Button } from "@/frontend/components/ui/button";
import { Slider } from "@/frontend/components/ui/slider";
import { Select } from "@/frontend/components/ui/select";
import { Sun, Moon, Maximize, Minimize } from "lucide-react";

const materials = [
  { value: "marble", label: "Marble", color: "#ffffff", roughness: 0.2, metalness: 0 },
  { value: "bronze", label: "Bronze", color: "#cd7f32", roughness: 0.3, metalness: 0.7 },
  { value: "gold", label: "Gold", color: "#ffd700", roughness: 0.1, metalness: 1 },
  { value: "silver", label: "Silver", color: "#c0c0c0", roughness: 0.1, metalness: 0.9 },
];

const environments = [
  { value: "sunset", label: "Sunset" },
  { value: "dawn", label: "Dawn" },
  { value: "night", label: "Night" },
  { value: "warehouse", label: "Studio" },
  { value: "city", label: "City" },
];

export function StatueViewer() {
  const [material, setMaterial] = useState(materials[0]);
  const [environment, setEnvironment] = useState(environments[0]);
  const [lightIntensity, setLightIntensity] = useState(1);
  const [showHumanModel, setShowHumanModel] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(true);

  return (
    <div className="relative h-[600px] bg-card rounded-lg overflow-hidden">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <color attach="background" args={["#000000"]} />
        
        <Stage environment={environment.value}>
          <DefaultModel
            material={material}
            scale={zoom}
            rotation={rotation}
          />
          {showHumanModel && <HumanModel scale={1.7} position={[1, 0, 0]} />}
        </Stage>

        <Environment preset={environment.value} background blur={0.8} />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.4} />
        <OrbitControls autoRotate={rotation} autoRotateSpeed={2} />

        <ambientLight intensity={lightIntensity * 0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={lightIntensity}
          castShadow
        />
      </Canvas>

      <div className="absolute bottom-0 left-0 right-0 p-4 glass-divine">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Material</label>
            <Select
              value={material.value}
              onValueChange={(value) => 
                setMaterial(materials.find(m => m.value === value) || materials[0])
              }
            >
              {materials.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Environment</label>
            <Select
              value={environment.value}
              onValueChange={(value) =>
                setEnvironment(environments.find(e => e.value === value) || environments[0])
              }
            >
              {environments.map((e) => (
                <option key={e.value} value={e.value}>{e.label}</option>
              ))}
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Lighting</label>
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4" />
              <Slider
                value={[lightIntensity]}
                onValueChange={([value]) => setLightIntensity(value)}
                min={0}
                max={2}
                step={0.1}
              />
              <Sun className="w-4 h-4" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Size</label>
            <div className="flex items-center gap-2">
              <Minimize className="w-4 h-4" />
              <Slider
                value={[zoom]}
                onValueChange={([value]) => setZoom(value)}
                min={0.5}
                max={2}
                step={0.1}
              />
              <Maximize className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            variant={rotation ? "default" : "outline"}
            onClick={() => setRotation(!rotation)}
          >
            Auto-Rotate
          </Button>
          <Button
            variant={showHumanModel ? "default" : "outline"}
            onClick={() => setShowHumanModel(!showHumanModel)}
          >
            Show Size Comparison
          </Button>
        </div>
      </div>
    </div>
  );
}

function DefaultModel({ material, scale, rotation }) {
  const modelRef = useRef();

  return (
    <mesh ref={modelRef} scale={scale}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial
        color={material.color}
        roughness={material.roughness}
        metalness={material.metalness}
      />
    </mesh>
  );
}

function HumanModel({ scale, position }) {
  return (
    <mesh scale={scale} position={position}>
      <capsuleGeometry args={[0.5, 1, 4, 8]} />
      <meshStandardMaterial color="#888888" />
    </mesh>
  );
}