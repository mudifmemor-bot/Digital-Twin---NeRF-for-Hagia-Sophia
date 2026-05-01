import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useStore from '../../store/useStore';

/* 
 * ArchitecturalScene — A procedural architectural space
 * representing a Byzantine heritage building interior.
 * This serves as a demonstration environment when no
 * real .splat or .ply data is loaded.
 * 
 * Replace this component with actual Gaussian Splat data
 * by loading a .splat file via the SplatViewer component.
 */

function Column({ position, height = 4, radius = 0.18 }) {
  const overlayMode = useStore((s) => s.overlayMode);
  const lightingMode = useStore((s) => s.lightingMode);

  const baseColor = lightingMode === 'night' ? '#3a3530' : '#c9b99a';
  const overlayColor =
    overlayMode === 'material'
      ? '#a0d8f0'
      : overlayMode === 'decay'
      ? '#f07070'
      : overlayMode === 'light'
      ? '#f0e070'
      : baseColor;

  return (
    <group position={position}>
      {/* Column shaft */}
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <cylinderGeometry args={[radius, radius * 1.1, height, 16]} />
        <meshStandardMaterial
          color={overlayColor}
          roughness={0.7}
          metalness={0.1}
          envMapIntensity={0.3}
        />
      </mesh>
      {/* Base */}
      <mesh receiveShadow position={[0, 0.15, 0]}>
        <boxGeometry args={[radius * 3, 0.3, radius * 3]} />
        <meshStandardMaterial color={overlayColor} roughness={0.8} />
      </mesh>
      {/* Capital */}
      <mesh castShadow position={[0, height + 0.1, 0]}>
        <boxGeometry args={[radius * 3.5, 0.25, radius * 3.5]} />
        <meshStandardMaterial color={overlayColor} roughness={0.6} />
      </mesh>
    </group>
  );
}

function Floor() {
  const overlayMode = useStore((s) => s.overlayMode);
  const lightingMode = useStore((s) => s.lightingMode);

  const baseColor = lightingMode === 'night' ? '#2a2520' : '#8a7d6b';
  const overlayColor =
    overlayMode === 'material'
      ? '#70d0a0'
      : overlayMode === 'decay'
      ? '#d0a060'
      : overlayMode === 'light'
      ? '#f0e070'
      : baseColor;

  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[14, 14]} />
      <meshStandardMaterial
        color={overlayColor}
        roughness={0.85}
        metalness={0.05}
      />
    </mesh>
  );
}

function Walls() {
  const overlayMode = useStore((s) => s.overlayMode);
  const lightingMode = useStore((s) => s.lightingMode);

  const baseColor = lightingMode === 'night' ? '#252220' : '#b5a48e';
  const overlayColor =
    overlayMode === 'material'
      ? '#c0b8d0'
      : overlayMode === 'decay'
      ? '#e08060'
      : overlayMode === 'light'
      ? '#f0d870'
      : baseColor;

  const wallHeight = 6;
  const wallWidth = 14;
  const wallThickness = 0.3;

  return (
    <group>
      {/* Back wall */}
      <mesh
        receiveShadow
        position={[0, wallHeight / 2, -7]}
      >
        <boxGeometry args={[wallWidth, wallHeight, wallThickness]} />
        <meshStandardMaterial
          color={overlayColor}
          roughness={0.9}
          metalness={0.02}
        />
      </mesh>
      {/* Left wall */}
      <mesh
        receiveShadow
        position={[-7, wallHeight / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[wallWidth, wallHeight, wallThickness]} />
        <meshStandardMaterial
          color={overlayColor}
          roughness={0.9}
          metalness={0.02}
        />
      </mesh>
      {/* Right wall */}
      <mesh
        receiveShadow
        position={[7, wallHeight / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[wallWidth, wallHeight, wallThickness]} />
        <meshStandardMaterial
          color={overlayColor}
          roughness={0.9}
          metalness={0.02}
        />
      </mesh>
    </group>
  );
}

function Arches() {
  const overlayMode = useStore((s) => s.overlayMode);
  const lightingMode = useStore((s) => s.lightingMode);

  const baseColor = lightingMode === 'night' ? '#302a25' : '#bfae95';
  const overlayColor =
    overlayMode === 'material'
      ? '#a0c8e0'
      : overlayMode === 'decay'
      ? '#d07070'
      : baseColor;

  const archPositions = [
    { pos: [0, 4.3, -6.8], rot: [0, 0, 0] },
    { pos: [-3, 4.3, -6.8], rot: [0, 0, 0] },
    { pos: [3, 4.3, -6.8], rot: [0, 0, 0] },
  ];

  return (
    <group>
      {archPositions.map((arch, i) => (
        <mesh key={i} position={arch.pos} rotation={arch.rot}>
          <torusGeometry args={[1.2, 0.12, 8, 16, Math.PI]} />
          <meshStandardMaterial color={overlayColor} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function WindowOpening() {
  const lightingMode = useStore((s) => s.lightingMode);
  const intensity = lightingMode === 'night' ? 0.3 : 2;

  return (
    <group position={[-6.8, 3.2, 1]}>
      {/* Window frame */}
      <mesh>
        <boxGeometry args={[0.15, 2.2, 1.2]} />
        <meshStandardMaterial color="#8a7d6b" roughness={0.8} />
      </mesh>
      {/* Light pane */}
      <mesh position={[0.05, 0, 0]}>
        <planeGeometry args={[0.05, 1.8, 0.8]} />
        <meshBasicMaterial
          color={lightingMode === 'night' ? '#1a2a4a' : '#ffe8b0'}
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* Spotlight through window */}
      <spotLight
        position={[-1, 0, 0]}
        target-position={[5, -2, 0]}
        intensity={intensity}
        angle={0.6}
        penumbra={0.8}
        color={lightingMode === 'night' ? '#4466aa' : '#ffe0a0'}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
    </group>
  );
}

function VaultCeiling() {
  const overlayMode = useStore((s) => s.overlayMode);
  const lightingMode = useStore((s) => s.lightingMode);

  const baseColor = lightingMode === 'night' ? '#1a1815' : '#9a8d7b';
  const overlayColor =
    overlayMode === 'material'
      ? '#d0c8a0'
      : overlayMode === 'decay'
      ? '#c07050'
      : baseColor;

  return (
    <group position={[0, 5.8, 0]}>
      <mesh>
        <sphereGeometry args={[7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color={overlayColor}
          roughness={0.9}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function MosaicFloorDetail() {
  const overlayMode = useStore((s) => s.overlayMode);

  const colors = overlayMode === 'material'
    ? ['#70d0a0', '#60c090', '#50b080', '#80e0b0']
    : ['#8b4513', '#2f4f4f', '#daa520', '#800020'];

  return (
    <group position={[0, 0.01, 2.5]}>
      {[...Array(4)].map((_, i) =>
        [...Array(4)].map((_, j) => (
          <mesh
            key={`${i}-${j}`}
            position={[(i - 1.5) * 0.4, 0, (j - 1.5) * 0.4]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[0.35, 0.35]} />
            <meshStandardMaterial
              color={colors[(i + j) % 4]}
              roughness={0.5}
              metalness={0.1}
            />
          </mesh>
        ))
      )}
    </group>
  );
}

function DustParticles() {
  const count = 200;
  const ref = useRef();
  const lightingMode = useStore((s) => s.lightingMode);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = Math.random() * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;
    const posArray = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] += Math.sin(time * 0.3 + i) * 0.001;
      posArray[i * 3] += Math.cos(time * 0.2 + i * 0.5) * 0.0005;
      if (posArray[i * 3 + 1] > 5) posArray[i * 3 + 1] = 0;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={lightingMode === 'night' ? '#4466aa' : '#ffe8c0'}
        transparent
        opacity={lightingMode === 'night' ? 0.3 : 0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ArchitecturalScene() {
  const lightingMode = useStore((s) => s.lightingMode);

  const columnPositions = [
    [-3, 0, -3],
    [3, 0, -3],
    [-3, 0, 3],
    [3, 0, 3],
    [-3, 0, 0],
    [3, 0, 0],
    [3.5, 0, -2], // Near POI column
  ];

  return (
    <group>
      {/* Ambient */}
      <ambientLight
        intensity={lightingMode === 'night' ? 0.08 : 0.25}
        color={lightingMode === 'night' ? '#2233aa' : '#fff5e0'}
      />

      {/* Main directional light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={lightingMode === 'night' ? 0.1 : 0.8}
        color={lightingMode === 'night' ? '#334488' : '#fff0d0'}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill light */}
      <pointLight
        position={[0, 4, 0]}
        intensity={lightingMode === 'night' ? 0.15 : 0.4}
        color={lightingMode === 'night' ? '#223366' : '#ffe0b0'}
        distance={12}
      />

      {/* Architecture */}
      <Floor />
      <Walls />
      <Arches />
      <VaultCeiling />
      <WindowOpening />
      <MosaicFloorDetail />

      {/* Columns */}
      {columnPositions.map((pos, i) => (
        <Column key={i} position={pos} />
      ))}

      {/* Atmospheric particles */}
      <DustParticles />

      {/* Night mode accent lights */}
      {lightingMode === 'night' && (
        <>
          <pointLight
            position={[-2, 0.5, -2]}
            intensity={0.5}
            color="#ff8844"
            distance={4}
          />
          <pointLight
            position={[2, 0.5, 2]}
            intensity={0.3}
            color="#ff6633"
            distance={3}
          />
        </>
      )}
    </group>
  );
}
