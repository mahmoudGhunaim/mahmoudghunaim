"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";
import * as THREE from "three";

const CYAN = "#22d3ee";
const VIOLET = "#a78bfa";
const PINK = "#f472b6";
const WHITE = "#f2f2f7";

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { pointer } = state;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.35,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.2,
      0.04
    );
  });

  return <group ref={group}>{children}</group>;
}

function TrafficDots({ z }: { z: number }) {
  const colors = ["#f87171", "#fbbf24", "#34d399"];
  return (
    <group position={[-1.05, 0.68, z]}>
      {colors.map((color, i) => (
        <mesh key={color} position={[i * 0.16, 0, 0]}>
          <circleGeometry args={[0.045, 24]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

type Line = { width: number; indent: number; color: string };

const CODE_LINES: Line[] = [
  { width: 1.1, indent: 0, color: VIOLET },
  { width: 0.7, indent: 0.15, color: CYAN },
  { width: 1.4, indent: 0.3, color: WHITE },
  { width: 0.5, indent: 0.3, color: PINK },
  { width: 0.9, indent: 0.15, color: CYAN },
  { width: 0.6, indent: 0, color: VIOLET },
  { width: 1.2, indent: 0, color: WHITE },
];

function CodeLines({ z }: { z: number }) {
  const top = 0.42;
  const gap = 0.19;
  return (
    <group position={[-1.05, 0, z]}>
      {CODE_LINES.map((line, i) => (
        <mesh key={i} position={[line.indent + line.width / 2, top - i * gap, 0]}>
          <boxGeometry args={[line.width, 0.055, 0.02]} />
          <meshStandardMaterial
            color={line.color}
            emissive={line.color}
            emissiveIntensity={0.35}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function CursorBlink({ z }: { z: number }) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.opacity = 0.35 + Math.abs(Math.sin(clock.getElapsedTime() * 3)) * 0.65;
  });
  return (
    <mesh ref={ref} position={[-1.05 + 0.05, 0.42 - 6 * 0.19, z]}>
      <boxGeometry args={[0.045, 0.16, 0.02]} />
      <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.9} transparent />
    </mesh>
  );
}

function EditorPanel({
  position,
  rotation,
  opacity = 1,
  detailed = false,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  opacity?: number;
  detailed?: boolean;
}) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[2.6, 1.7, 0.08]} radius={0.09} smoothness={4}>
        <meshStandardMaterial
          color="#0c0c1a"
          roughness={0.35}
          metalness={0.25}
          transparent
          opacity={opacity}
        />
      </RoundedBox>
      <RoundedBox args={[2.62, 1.72, 0.02]} radius={0.09} smoothness={4} position={[0, 0, -0.03]}>
        <meshBasicMaterial color={CYAN} transparent opacity={opacity * 0.18} />
      </RoundedBox>
      {detailed && (
        <>
          <TrafficDots z={0.045} />
          <CodeLines z={0.045} />
          <CursorBlink z={0.05} />
        </>
      )}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.6], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 3, 4]} intensity={1.5} color={CYAN} />
        <pointLight position={[-4, -2, -3]} intensity={1} color={PINK} />
        <pointLight position={[0, 4, -2]} intensity={0.5} color={VIOLET} />

        <Rig>
          <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.8}>
            <EditorPanel position={[0.65, -0.55, -1.1]} rotation={[0.05, -0.5, 0.05]} opacity={0.35} />
            <EditorPanel position={[-0.7, 0.5, -0.6]} rotation={[-0.05, 0.4, -0.04]} opacity={0.5} />
            <EditorPanel position={[0, 0, 0]} rotation={[0, -0.12, 0]} detailed />
          </Float>
        </Rig>

        <Sparkles count={45} scale={[7, 4.5, 6]} size={1.3} speed={0.25} color="#ffffff" opacity={0.3} />
      </Suspense>
    </Canvas>
  );
}
