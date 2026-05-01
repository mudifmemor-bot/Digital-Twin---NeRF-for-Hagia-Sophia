import React from 'react';
import useStore from './store/useStore';
import LandingScreen from './components/ui/LandingScreen';
import LoadingScreen from './components/ui/LoadingScreen';
import SceneCanvas from './components/3d/SceneCanvas';
import Toolbar from './components/ui/Toolbar';
import POIPanel from './components/ui/POIPanel';
import DebugPanel from './components/ui/DebugPanel';
import TechPanel from './components/ui/TechPanel';
import UseCasesPanel from './components/ui/UseCasesPanel';
import TourOverlay from './components/ui/TourOverlay';
import OverlayLegend from './components/ui/OverlayLegend';
import './App.css';

export default function App() {
  const appState = useStore((s) => s.appState);

  return (
    <div className="app-container">
      {/* Landing */}
      {appState === 'landing' && <LandingScreen />}

      {/* Loading */}
      {appState === 'loading' && <LoadingScreen />}

      {/* Experience */}
      {appState === 'experience' && (
        <>
          <SceneCanvas />
          <Toolbar />
          <POIPanel />
          <DebugPanel />
          <TechPanel />
          <UseCasesPanel />
          <TourOverlay />
          <OverlayLegend />

          {/* Bottom-left hints */}
          <div className="nav-hint glass-panel-light animate-fade-in">
            <span className="nav-hint-text">
              🖱️ Orbit — Scroll to zoom — Click markers to inspect
            </span>
          </div>
        </>
      )}
    </div>
  );
}
