import React from 'react';
import useStore from '../../store/useStore';
import './DebugPanel.css';

export default function DebugPanel() {
  const showDebug = useStore((s) => s.showDebug);
  const fps = useStore((s) => s.fps);
  const loadedPoints = useStore((s) => s.loadedPoints);
  const renderQuality = useStore((s) => s.renderQuality);
  const overlayMode = useStore((s) => s.overlayMode);
  const lightingMode = useStore((s) => s.lightingMode);
  const navMode = useStore((s) => s.navMode);

  if (!showDebug) return null;

  const fpsColor =
    fps >= 50 ? 'var(--accent-emerald)' : fps >= 30 ? 'var(--accent-warm)' : 'var(--accent-rose)';

  return (
    <div className="debug-panel glass-panel animate-slide-in-right">
      <div className="debug-header">
        <span className="debug-title">Performance</span>
        <span className="debug-badge" style={{ color: fpsColor }}>
          ● {fps} FPS
        </span>
      </div>

      <div className="debug-grid">
        <div className="debug-item">
          <span className="debug-label">Loaded Points</span>
          <span className="debug-value">{loadedPoints.toLocaleString()}</span>
        </div>
        <div className="debug-item">
          <span className="debug-label">Quality</span>
          <span className="debug-value quality">{renderQuality}</span>
        </div>
        <div className="debug-item">
          <span className="debug-label">Renderer</span>
          <span className="debug-value">WebGL 2.0</span>
        </div>
        <div className="debug-item">
          <span className="debug-label">Shadows</span>
          <span className="debug-value">PCF Soft</span>
        </div>
        <div className="debug-item">
          <span className="debug-label">Lighting</span>
          <span className="debug-value">{lightingMode}</span>
        </div>
        <div className="debug-item">
          <span className="debug-label">Overlay</span>
          <span className="debug-value">{overlayMode}</span>
        </div>
        <div className="debug-item">
          <span className="debug-label">Navigation</span>
          <span className="debug-value">{navMode}</span>
        </div>
        <div className="debug-item">
          <span className="debug-label">DPR</span>
          <span className="debug-value">{window.devicePixelRatio.toFixed(1)}</span>
        </div>
      </div>

      <div className="debug-footer">
        <span className="debug-engine">Three.js + R3F</span>
      </div>
    </div>
  );
}
