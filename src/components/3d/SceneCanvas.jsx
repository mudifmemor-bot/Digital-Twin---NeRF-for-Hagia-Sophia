import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import ArchitecturalScene from './ArchitecturalScene';
import POISystem from './POISystem';
import CameraController from './CameraController';
import useStore from '../../store/useStore';

function FPSCounter() {
  const setFps = useStore((s) => s.setFps);
  const frames = useRef(0);
  const lastTime = useRef(performance.now());

  useFrame(() => {
    frames.current++;
    const now = performance.now();
    if (now - lastTime.current >= 1000) {
      setFps(frames.current);
      frames.current = 0;
      lastTime.current = now;
    }
  });

  return null;
}

function SceneSetup() {
  const { gl, scene } = useThree();

  useEffect(() => {
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = 2; // PCFSoftShadowMap
    gl.toneMapping = 4; // ACESFilmicToneMapping
    gl.toneMappingExposure = 1.2;
    gl.outputColorSpace = 'srgb';
    
    // Set loaded points (simulated)
    useStore.getState().setLoadedPoints(847293);
  }, [gl, scene]);

  return null;
}

function CanvasLoader() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function SceneCanvas() {
  const activePOI = useStore((s) => s.activePOI);
  const setActivePOI = useStore((s) => s.setActivePOI);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Canvas
        shadows
        camera={{
          position: [0, 2.5, 8],
          fov: 55,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        onPointerMissed={() => {
          if (activePOI) setActivePOI(null);
        }}
      >
        <SceneSetup />
        <FPSCounter />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />

        <Suspense fallback={<CanvasLoader />}>
          <ArchitecturalScene />
          <POISystem />

          {/* Fog for atmosphere */}
          <fog attach="fog" args={['#0a0a0f', 8, 25]} />
        </Suspense>

        <CameraController />
      </Canvas>
    </div>
  );
}
