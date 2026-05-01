import React from 'react';
import { motion } from 'framer-motion';
import useStore from '../../store/useStore';
import { useCasesData } from '../../data/mockData';
import './UseCasesPanel.css';

export default function UseCasesPanel() {
  const showUseCasesPanel = useStore((s) => s.showUseCasesPanel);
  const setShowUseCasesPanel = useStore((s) => s.setShowUseCasesPanel);

  if (!showUseCasesPanel) return null;

  return (
    <motion.div
      className="usecases-panel glass-panel"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Header */}
      <div className="usecases-header">
        <div>
          <span className="text-caption" style={{ color: 'var(--accent-cool)' }}>
            Real-World Impact
          </span>
          <h2 className="usecases-title">Applications & Use Cases</h2>
        </div>
        <button
          className="poi-close"
          onClick={() => setShowUseCasesPanel(false)}
          id="btn-close-usecases"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6L18 18" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="usecases-content">
        <div className="usecases-grid">
          {useCasesData.map((useCase, i) => (
            <motion.div
              key={useCase.id}
              className="usecase-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="usecase-icon">{useCase.icon}</div>
              <h3 className="usecase-card-title">{useCase.title}</h3>
              <p className="usecase-description">{useCase.description}</p>

              <div className="usecase-examples">
                <span className="examples-label">Examples</span>
                <ul className="examples-list">
                  {useCase.examples.map((ex, j) => (
                    <li key={j} className="example-item">
                      <span className="example-arrow">→</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
