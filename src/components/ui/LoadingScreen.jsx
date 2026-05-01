import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useStore from '../../store/useStore';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing WebGL context...');

  const statusMessages = [
    { at: 0, msg: 'Initializing WebGL context...' },
    { at: 15, msg: 'Loading scene geometry...' },
    { at: 30, msg: 'Parsing Gaussian splat data...' },
    { at: 45, msg: 'Building spatial index...' },
    { at: 60, msg: 'Optimizing render pipeline...' },
    { at: 75, msg: 'Loading material textures...' },
    { at: 88, msg: 'Preparing point of interest markers...' },
    { at: 95, msg: 'Finalizing scene composition...' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 3 + 1, 100);
        const msg = [...statusMessages]
          .reverse()
          .find((s) => next >= s.at);
        if (msg) setStatus(msg.msg);
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-grid" />

      <motion.div
        className="loading-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Spinner */}
        <div className="loading-spinner">
          <div className="spinner-ring" />
          <div className="spinner-ring inner" />
          <div className="spinner-core" />
        </div>

        {/* Progress */}
        <div className="loading-info">
          <div className="loading-percentage">
            {Math.floor(progress)}
            <span className="percent-sign">%</span>
          </div>

          <div className="loading-bar-container">
            <div className="loading-bar">
              <div
                className="loading-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="loading-status">{status}</div>
        </div>

        {/* Data readout */}
        <div className="loading-readout">
          <span className="readout-item">
            <span className="readout-label">Engine</span>
            <span className="readout-value">Three.js r160</span>
          </span>
          <span className="readout-divider">|</span>
          <span className="readout-item">
            <span className="readout-label">Renderer</span>
            <span className="readout-value">WebGL 2.0</span>
          </span>
          <span className="readout-divider">|</span>
          <span className="readout-item">
            <span className="readout-label">Points</span>
            <span className="readout-value">847K</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
