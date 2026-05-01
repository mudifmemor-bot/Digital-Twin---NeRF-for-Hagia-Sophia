import { create } from 'zustand';

const useStore = create((set, get) => ({
  // App State
  appState: 'landing', // 'landing' | 'experience' | 'loading'
  setAppState: (state) => set({ appState: state }),

  // Navigation Mode
  navMode: 'orbit', // 'orbit' | 'firstPerson'
  setNavMode: (mode) => set({ navMode: mode }),

  // Lighting
  lightingMode: 'day', // 'day' | 'night'
  setLightingMode: (mode) => set({ lightingMode: mode }),
  lightBlend: 0, // 0 = day, 1 = night
  setLightBlend: (val) => set({ lightBlend: val }),

  // Overlay Mode
  overlayMode: 'none', // 'none' | 'material' | 'decay' | 'light'
  setOverlayMode: (mode) => set({ overlayMode: mode === get().overlayMode ? 'none' : mode }),

  // POI
  activePOI: null,
  setActivePOI: (poi) => set({ activePOI: poi }),

  // Camera
  cameraTarget: null,
  setCameraTarget: (target) => set({ cameraTarget: target }),

  // Panels
  showInfoPanel: false,
  setShowInfoPanel: (show) => set({ showInfoPanel: show }),
  showTechPanel: false,
  setShowTechPanel: (show) => set({ showTechPanel: show }),
  showUseCasesPanel: false,
  setShowUseCasesPanel: (show) => set({ showUseCasesPanel: show }),

  // Debug
  showDebug: false,
  setShowDebug: (show) => set({ showDebug: show }),
  fps: 0,
  setFps: (fps) => set({ fps }),
  loadedPoints: 0,
  setLoadedPoints: (pts) => set({ loadedPoints: pts }),
  renderQuality: 'high',
  setRenderQuality: (q) => set({ renderQuality: q }),

  // Loading
  loadingProgress: 0,
  setLoadingProgress: (p) => set({ loadingProgress: p }),

  // Tour Mode
  tourActive: false,
  setTourActive: (active) => set({ tourActive: active }),
  tourStep: 0,
  setTourStep: (step) => set({ tourStep: step }),

  // Screenshot
  captureScreenshot: false,
  setCaptureScreenshot: (v) => set({ captureScreenshot: v }),
}));

export default useStore;
