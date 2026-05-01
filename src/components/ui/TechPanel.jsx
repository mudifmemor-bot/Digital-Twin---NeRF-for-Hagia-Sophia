import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../../store/useStore';
import { techData } from '../../data/mockData';
import './TechPanel.css';

export default function TechPanel() {
  const showTechPanel = useStore((s) => s.showTechPanel);
  const setShowTechPanel = useStore((s) => s.setShowTechPanel);
  const [activeTab, setActiveTab] = useState('nerf');

  if (!showTechPanel) return null;

  const tabs = [
    { id: 'nerf', label: 'NeRF' },
    { id: 'gaussianSplatting', label: '3D Gaussian Splatting' },
    { id: 'comparison', label: 'vs Photogrammetry' },
  ];

  return (
    <motion.div
      className="tech-panel glass-panel"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Header */}
      <div className="tech-header">
        <div>
          <span className="text-caption" style={{ color: 'var(--accent-tertiary)' }}>
            Scientific Reference
          </span>
          <h2 className="tech-title">Technical Documentation</h2>
        </div>
        <button
          className="poi-close"
          onClick={() => setShowTechPanel(false)}
          id="btn-close-tech"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6L18 18" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="tech-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tech-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tech-content">
        {activeTab === 'nerf' && (
          <TechSection data={techData.nerf} />
        )}
        {activeTab === 'gaussianSplatting' && (
          <TechSection data={techData.gaussianSplatting} />
        )}
        {activeTab === 'comparison' && (
          <ComparisonTable data={techData.comparison} />
        )}
      </div>
    </motion.div>
  );
}

function TechSection({ data }) {
  return (
    <div className="tech-section-content">
      <div className="tech-section-header">
        <h3 className="tech-section-title">{data.title}</h3>
        <span className="tech-section-subtitle">{data.subtitle}</span>
      </div>

      <p className="tech-description">{data.description}</p>

      {/* Formula */}
      <div className="tech-formula">
        <span className="formula-label">Core Function</span>
        <code className="formula-code">{data.formula}</code>
      </div>

      {/* Key Points */}
      <div className="tech-list-section">
        <h4 className="tech-list-title">Key Points</h4>
        <ul className="tech-list">
          {data.keyPoints.map((point, i) => (
            <li key={i} className="tech-list-item">
              <span className="tech-bullet accent" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Advantages */}
      <div className="tech-list-section">
        <h4 className="tech-list-title">Advantages</h4>
        <ul className="tech-list">
          {data.advantages.map((adv, i) => (
            <li key={i} className="tech-list-item">
              <span className="tech-bullet emerald" />
              {adv}
            </li>
          ))}
        </ul>
      </div>

      {/* Limitations */}
      <div className="tech-list-section">
        <h4 className="tech-list-title">Limitations</h4>
        <ul className="tech-list">
          {data.limitations.map((lim, i) => (
            <li key={i} className="tech-list-item">
              <span className="tech-bullet rose" />
              {lim}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ComparisonTable({ data }) {
  return (
    <div className="tech-section-content">
      <h3 className="tech-section-title">{data.title}</h3>

      <div className="comparison-table">
        <div className="comparison-header">
          <span className="comp-cell header">Aspect</span>
          <span className="comp-cell header">Photogrammetry</span>
          <span className="comp-cell header accent">Neural Methods</span>
        </div>
        {data.points.map((point, i) => (
          <div key={i} className="comparison-row">
            <span className="comp-cell label">{point.aspect}</span>
            <span className="comp-cell traditional">{point.traditional}</span>
            <span className="comp-cell neural">{point.neural}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
