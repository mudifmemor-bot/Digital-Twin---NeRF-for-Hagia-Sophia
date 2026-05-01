import React from 'react';
import useStore from '../../store/useStore';
import './Toolbar.css';

export default function Toolbar() {
  const lightingMode = useStore((s) => s.lightingMode);
  const setLightingMode = useStore((s) => s.setLightingMode);
  const overlayMode = useStore((s) => s.overlayMode);
  const setOverlayMode = useStore((s) => s.setOverlayMode);
  const showDebug = useStore((s) => s.showDebug);
  const setShowDebug = useStore((s) => s.setShowDebug);
  const showTechPanel = useStore((s) => s.showTechPanel);
  const setShowTechPanel = useStore((s) => s.setShowTechPanel);
  const showUseCasesPanel = useStore((s) => s.showUseCasesPanel);
  const setShowUseCasesPanel = useStore((s) => s.setShowUseCasesPanel);
  const tourActive = useStore((s) => s.tourActive);
  const setTourActive = useStore((s) => s.setTourActive);
  const setTourStep = useStore((s) => s.setTourStep);

  const handleTour = () => {
    if (tourActive) {
      setTourActive(false);
      setTourStep(0);
    } else {
      setTourActive(true);
      setTourStep(0);
    }
  };

  const handleScreenshot = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = `digital-twin-capture-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="toolbar">
      {/* Logo */}
      <div className="toolbar-logo">
        <div className="logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="logo-text">DIGITAL TWIN</span>
      </div>

      {/* Center controls */}
      <div className="toolbar-center">
        {/* Lighting Toggle */}
        <div className="toolbar-group">
          <span className="toolbar-label">Lighting</span>
          <div className="toolbar-toggle-group">
            <button
              className={`toolbar-toggle-btn ${
                lightingMode === 'day' ? 'active' : ''
              }`}
              onClick={() => setLightingMode('day')}
              id="btn-lighting-day"
            >
              ☀️ Day
            </button>
            <button
              className={`toolbar-toggle-btn ${
                lightingMode === 'night' ? 'active' : ''
              }`}
              onClick={() => setLightingMode('night')}
              id="btn-lighting-night"
            >
              🌙 Night
            </button>
          </div>
        </div>

        <div className="toolbar-separator" />

        {/* Overlay Modes */}
        <div className="toolbar-group">
          <span className="toolbar-label">Analysis</span>
          <div className="toolbar-toggle-group">
            <button
              className={`toolbar-toggle-btn ${
                overlayMode === 'material' ? 'active material' : ''
              }`}
              onClick={() => setOverlayMode('material')}
              id="btn-overlay-material"
            >
              🧱 Material
            </button>
            <button
              className={`toolbar-toggle-btn ${
                overlayMode === 'decay' ? 'active decay' : ''
              }`}
              onClick={() => setOverlayMode('decay')}
              id="btn-overlay-decay"
            >
              ⚠️ Decay
            </button>
            <button
              className={`toolbar-toggle-btn ${
                overlayMode === 'light' ? 'active light' : ''
              }`}
              onClick={() => setOverlayMode('light')}
              id="btn-overlay-light"
            >
              💡 Light
            </button>
          </div>
        </div>
      </div>

      {/* Right controls */}
      <div className="toolbar-right">
        <button
          className={`toolbar-icon-btn ${tourActive ? 'active' : ''}`}
          onClick={handleTour}
          title="Guided Tour"
          id="btn-tour"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
          </svg>
        </button>

        <button
          className="toolbar-icon-btn"
          onClick={handleScreenshot}
          title="Capture Screenshot"
          id="btn-screenshot"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M8 5L9 3H15L16 5" />
          </svg>
        </button>

        <button
          className={`toolbar-icon-btn ${showTechPanel ? 'active' : ''}`}
          onClick={() => setShowTechPanel(!showTechPanel)}
          title="Technical Documentation"
          id="btn-tech"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
            <path d="M6.5 2H20V22H6.5A2.5 2.5 0 014 19.5V4.5A2.5 2.5 0 016.5 2Z" />
            <path d="M8 7H16M8 11H12" />
          </svg>
        </button>

        <button
          className={`toolbar-icon-btn ${showUseCasesPanel ? 'active' : ''}`}
          onClick={() => setShowUseCasesPanel(!showUseCasesPanel)}
          title="Use Cases"
          id="btn-usecases"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12H22M12 2C14.5 4.5 16 8 16 12S14.5 19.5 12 22C9.5 19.5 8 16 8 12S9.5 4.5 12 2Z" />
          </svg>
        </button>

        <button
          className={`toolbar-icon-btn ${showDebug ? 'active' : ''}`}
          onClick={() => setShowDebug(!showDebug)}
          title="Debug Panel"
          id="btn-debug"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9H21M9 21V9" />
          </svg>
        </button>
      </div>
    </div>
  );
}
