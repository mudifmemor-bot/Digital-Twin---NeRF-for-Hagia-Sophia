import React, { useRef, useEffect, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PointerLockControls } from '@react-three/drei';
import * as THREE from 'three';
import useStore from '../../store/useStore';
import { tourPositions } from '../../data/mockData';

export default function CameraController() {
  const navMode = useStore((s) => s.navMode);
  const cameraTarget = useStore((s) => s.cameraTarget);
  const setCameraTarget = useStore((s) => s.setCameraTarget);
  const tourActive = useStore((s) => s.tourActive);
  const tourStep = useStore((s) => s.tourStep);
  const setTourStep = useStore((s) => s.setTourStep);
  const setTourActive = useStore((s) => s.setTourActive);

  const orbitRef = useRef();
  const { camera } = useThree();
  const animating = useRef(false);
  const animStartTime = useRef(0);
  const animDuration = useRef(2000);
  const startPos = useRef(new THREE.Vector3());
  const endPos = useRef(new THREE.Vector3());
  const startTarget = useRef(new THREE.Vector3());
  const endTarget = useRef(new THREE.Vector3());

  // Animate camera to target
  useEffect(() => {
    if (cameraTarget && orbitRef.current) {
      animating.current = true;
      animStartTime.current = Date.now();
      animDuration.current = 2000;

      startPos.current.copy(camera.position);
      endPos.current.set(
        cameraTarget.position[0],
        cameraTarget.position[1],
        cameraTarget.position[2]
      );

      startTarget.current.copy(orbitRef.current.target);
      if (cameraTarget.target) {
        endTarget.current.set(
          cameraTarget.target[0],
          cameraTarget.target[1],
          cameraTarget.target[2]
        );
      }

      setCameraTarget(null);
    }
  }, [cameraTarget, camera, setCameraTarget]);

  // Tour mode
  useEffect(() => {
    if (tourActive && tourPositions[tourStep]) {
      const pos = tourPositions[tourStep];
      animating.current = true;
      animStartTime.current = Date.now();
      animDuration.current = pos.duration || 3000;

      startPos.current.copy(camera.position);
      endPos.current.set(pos.position[0], pos.position[1], pos.position[2]);

      if (orbitRef.current) {
        startTarget.current.copy(orbitRef.current.target);
      }
      endTarget.current.set(pos.target[0], pos.target[1], pos.target[2]);
    }
  }, [tourActive, tourStep, camera]);

  useFrame(() => {
    if (!animating.current || !orbitRef.current) return;

    const elapsed = Date.now() - animStartTime.current;
    const progress = Math.min(elapsed / animDuration.current, 1);

    // Smooth easing
    const eased = 1 - Math.pow(1 - progress, 3);

    camera.position.lerpVectors(startPos.current, endPos.current, eased);
    orbitRef.current.target.lerpVectors(
      startTarget.current,
      endTarget.current,
      eased
    );
    orbitRef.current.update();

    if (progress >= 1) {
      animating.current = false;

      // Tour: advance to next step
      if (tourActive) {
        const nextStep = tourStep + 1;
        if (nextStep < tourPositions.length) {
          setTimeout(() => setTourStep(nextStep), 1500);
        } else {
          setTimeout(() => {
            setTourActive(false);
            setTourStep(0);
          }, 2000);
        }
      }
    }
  });

  if (navMode === 'orbit') {
    return (
      <OrbitControls
        ref={orbitRef}
        enableDamping
        dampingFactor={0.05}
        minDistance={1}
        maxDistance={15}
        maxPolarAngle={Math.PI * 0.85}
        target={[0, 1.5, 0]}
        enablePan
      />
    );
  }

  return null;
}
