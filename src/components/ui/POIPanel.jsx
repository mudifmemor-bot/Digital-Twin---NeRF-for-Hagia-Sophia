import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../../store/useStore';
import './POIPanel.css';

export default function POIPanel() {
  const activePOI = useStore((s) => s.activePOI);
  const setActivePOI = useStore((s) => s.setActivePOI);

  return (
    <AnimatePresence>
      {activePOI && (
        <motion.div
          className="poi-panel glass-panel"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Header */}
          <div className="poi-header">
            <div className="poi-header-top">
              <span className={`badge badge-${activePOI.badgeType}`}>
                {activePOI.badge}
              </span>
              <button
                className="poi-close"
                onClick={() => setActivePOI(null)}
                id="btn-close-poi"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6L18 18" />
                </svg>
              </button>
            </div>
            <h2 className="poi-title">{activePOI.title}</h2>
          </div>

          {/* Scrollable content */}
          <div className="poi-scroll">
            {/* Description */}
            <div className="poi-section">
              <p className="poi-description">{activePOI.description}</p>
            </div>

            <div className="divider" />

            {/* Material Analysis */}
            <div className="poi-section">
              <h3 className="poi-section-title">
                <span className="section-icon">🧪</span>
                Material Analysis
              </h3>
              <div className="poi-material-grid">
                <div className="material-item">
                  <span className="material-label">Primary</span>
                  <span className="material-value">
                    {activePOI.materialAnalysis.primary}
                  </span>
                </div>
                <div className="material-item">
                  <span className="material-label">Secondary</span>
                  <span className="material-value">
                    {activePOI.materialAnalysis.secondary}
                  </span>
                </div>
                <div className="material-item full">
                  <span className="material-label">Condition</span>
                  <span className="material-value">
                    {activePOI.materialAnalysis.condition}
                  </span>
                </div>
              </div>

              {/* Risk level bar */}
              <div className="poi-risk">
                <div className="risk-header">
                  <span className="risk-label">Deterioration Risk</span>
                  <span className="risk-value">
                    {activePOI.materialAnalysis.riskLevel}%
                  </span>
                </div>
                <div className="risk-bar">
                  <div
                    className="risk-bar-fill"
                    style={{
                      width: `${activePOI.materialAnalysis.riskLevel}%`,
                      background:
                        activePOI.materialAnalysis.riskLevel > 70
                          ? 'linear-gradient(90deg, #f59e0b, #f43f5e)'
                          : activePOI.materialAnalysis.riskLevel > 40
                          ? 'linear-gradient(90deg, #10b981, #f59e0b)'
                          : 'linear-gradient(90deg, #10b981, #06b6d4)',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="divider" />

            {/* Decay Observations */}
            <div className="poi-section">
              <h3 className="poi-section-title">
                <span className="section-icon">⚠️</span>
                Decay Observations
              </h3>
              <ul className="poi-decay-list">
                {activePOI.decayObservations.map((obs, i) => (
                  <li key={i} className="decay-item">
                    <span className="decay-bullet" />
                    {obs}
                  </li>
                ))}
              </ul>
            </div>

            <div className="divider" />

            {/* Architectural Insight */}
            <div className="poi-section">
              <h3 className="poi-section-title">
                <span className="section-icon">🏛️</span>
                Architectural Insight
              </h3>
              <p className="poi-insight">{activePOI.architecturalInsight}</p>
            </div>

            <div className="divider" />

            {/* Phenomenology */}
            <div className="poi-section">
              <h3 className="poi-section-title">
                <span className="section-icon">✨</span>
                Phenomenological Note
              </h3>
              <blockquote className="poi-quote">
                {activePOI.phenomenology}
              </blockquote>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
