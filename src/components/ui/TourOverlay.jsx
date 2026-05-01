import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../../store/useStore';
import { tourPositions } from '../../data/mockData';
import './TourOverlay.css';

export default function TourOverlay() {
  const tourActive = useStore((s) => s.tourActive);
  const tourStep = useStore((s) => s.tourStep);
  const setTourActive = useStore((s) => s.setTourActive);
  const setTourStep = useStore((s) => s.setTourStep);

  if (!tourActive) return null;

  const currentStop = tourPositions[tourStep];
  if (!currentStop) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="tour-overlay glass-panel"
        key={tourStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="tour-progress">
          {tourPositions.map((_, i) => (
            <div
              key={i}
              className={`tour-dot ${i === tourStep ? 'active' : ''} ${
                i < tourStep ? 'completed' : ''
              }`}
            />
          ))}
        </div>

        <div className="tour-info">
          <span className="tour-step-label">
            Stop {tourStep + 1} of {tourPositions.length}
          </span>
          <h3 className="tour-stop-title">{currentStop.label}</h3>
          <p className="tour-stop-desc">{currentStop.description}</p>
        </div>

        <div className="tour-actions">
          <button
            className="btn btn-ghost"
            onClick={() => {
              setTourActive(false);
              setTourStep(0);
            }}
            id="btn-exit-tour"
          >
            Exit Tour
          </button>
          {tourStep < tourPositions.length - 1 && (
            <button
              className="btn btn-primary"
              onClick={() => setTourStep(tourStep + 1)}
              id="btn-next-tour"
            >
              Next →
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
