import React, { useRef, useState, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import useStore from '../../store/useStore';
import { poiData } from '../../data/mockData';

function POIMarker({ poi }) {
  const ref = useRef();
  const ringRef = useRef();
  const [hovered, setHovered] = useState(false);
  const setActivePOI = useStore((s) => s.setActivePOI);
  const activePOI = useStore((s) => s.activePOI);
  const isActive = activePOI?.id === poi.id;

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;

    // Floating animation
    ref.current.position.y =
      poi.position[1] + Math.sin(time * 1.5 + poi.position[0]) * 0.05;

    // Ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.y = time * 0.5;
      ringRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    }
  });

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (isActive) {
        setActivePOI(null);
      } else {
        setActivePOI(poi);
      }
    },
    [isActive, poi, setActivePOI]
  );

  const colorMap = {
    structural: '#f43f5e',
    light: '#f59e0b',
    material: '#10b981',
  };

  const color = colorMap[poi.category] || '#6366f1';

  return (
    <group
      ref={ref}
      position={poi.position}
      onClick={handleClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={isActive ? 1 : 0.9} />
      </mesh>

      {/* Glow sphere */}
      <mesh scale={hovered || isActive ? 2.5 : 1.8}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered || isActive ? 0.25 : 0.1}
        />
      </mesh>

      {/* Rotating ring */}
      <mesh ref={ringRef} scale={hovered || isActive ? 1.5 : 1}>
        <torusGeometry args={[0.18, 0.012, 8, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered || isActive ? 0.8 : 0.4}
        />
      </mesh>

      {/* Pulse ring */}
      <PulseRing color={color} active={isActive || hovered} />

      {/* Label on hover */}
      {hovered && !isActive && (
        <Html
          center
          distanceFactor={8}
          position={[0, 0.35, 0]}
          style={{ pointerEvents: 'none' }}
        >
          <div
            style={{
              background: 'rgba(10, 10, 15, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '6px 14px',
              whiteSpace: 'nowrap',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              color: '#f1f5f9',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: color,
                marginRight: 8,
              }}
            />
            {poi.title}
          </div>
        </Html>
      )}

      {/* Vertical line to ground */}
      <mesh position={[0, -poi.position[1] / 2, 0]}>
        <cylinderGeometry args={[0.003, 0.003, poi.position[1], 4]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function PulseRing({ color, active }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;
    const scale = 1 + Math.sin(time * 2) * 0.3;
    ref.current.scale.set(scale, scale, scale);
    ref.current.material.opacity = active
      ? 0.4 - Math.sin(time * 2) * 0.2
      : 0.15 - Math.sin(time * 2) * 0.1;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.22, 0.25, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function POISystem() {
  return (
    <group>
      {poiData.map((poi) => (
        <POIMarker key={poi.id} poi={poi} />
      ))}
    </group>
  );
}
