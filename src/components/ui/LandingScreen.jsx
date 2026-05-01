import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../../store/useStore';
import './LandingScreen.css';

export default function LandingScreen() {
  const setAppState = useStore((s) => s.setAppState);
  const [phase, setPhase] = useState('intro'); // intro | ready

  useEffect(() => {
    const timer = setTimeout(() => setPhase('ready'), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setAppState('loading');
    setTimeout(() => setAppState('experience'), 2500);
  };

  return (
    <div className="landing-screen">
      {/* Background grid */}
      <div className="landing-grid" />

      {/* Radial gradient glow */}
      <div className="landing-glow" />
      <div className="landing-glow-secondary" />

      {/* Floating particles */}
      <div className="landing-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="landing-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Top badge */}
        <motion.div
          className="landing-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="badge-dot" />
          <span>Research Interface v2.0</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="landing-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="title-line">Digital Twin</span>
          <span className="title-accent">of Hagia Sophia</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="landing-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          AI-driven Preservation through Neural Radiance Fields
        </motion.p>

        {/* Description */}
        <motion.p
          className="landing-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Explore a photorealistic 3D reconstruction of a cultural heritage
          architectural space. Navigate freely, discover material analyses,
          and understand how AI captures the atmosphere of place.
        </motion.p>

        {/* Tech tags */}
        <motion.div
          className="landing-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <span className="tag">NeRF</span>
          <span className="tag">3D Gaussian Splatting</span>
          <span className="tag">Three.js</span>
          <span className="tag">React Three Fiber</span>
          <span className="tag">WebGL</span>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="landing-cta"
          onClick={handleEnter}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.6, type: 'spring' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="cta-text">Enter Experience</span>
          <span className="cta-arrow">→</span>
          <span className="cta-glow" />
        </motion.button>

        {/* Bottom info */}
        <motion.div
          className="landing-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="footer-item">
            <span className="footer-label">Method</span>
            <span className="footer-value">3D Gaussian Splatting</span>
          </div>
          <div className="footer-divider" />
          <div className="footer-item">
            <span className="footer-label">Resolution</span>
            <span className="footer-value">847K Points</span>
          </div>
          <div className="footer-divider" />
          <div className="footer-item">
            <span className="footer-label">Status</span>
            <span className="footer-value footer-live">
              <span className="live-dot" />
              Live
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="corner-decoration top-left" />
      <div className="corner-decoration top-right" />
      <div className="corner-decoration bottom-left" />
      <div className="corner-decoration bottom-right" />
    </div>
  );
}
