// Points of Interest data for the Digital Twin
// Each POI is anchored in 3D space and contains architectural analysis

export const poiData = [
  {
    id: 'poi-column-alpha',
    title: 'Corinthian Column — West Nave',
    position: [3.5, 1.8, -2],
    category: 'structural',
    badge: 'Structural Analysis',
    badgeType: 'rose',
    description:
      'This load-bearing Corinthian column exhibits characteristic vertical cracking patterns consistent with centuries of seismic stress. The capital retains its original acanthus leaf ornamentation, though significant erosion is visible on the south-facing surfaces.',
    materialAnalysis: {
      primary: 'Proconnesian Marble',
      secondary: 'Limestone mortar (Byzantine period)',
      condition: 'Moderate deterioration',
      riskLevel: 72,
    },
    decayObservations: [
      'Vertical micro-fractures (2-3mm width) along the fluting',
      'Surface efflorescence indicating moisture penetration',
      'Bio-colonization on lower 40cm (algae, lichen)',
      'Partial loss of capital volutes on NW face',
    ],
    architecturalInsight:
      'In Zumthor\'s phenomenological framework, columns mediate between the weight of structure and the lightness of space. This column, through its weathering, tells a story of temporal accumulation — each crack a chapter of geological and human time.',
    phenomenology:
      'The tactile quality of the deteriorated surface invites haptic engagement. The contrast between smooth marble and rough decay creates what Pallasmaa calls "the eyes of the skin" — architecture experienced through the body.',
  },
  {
    id: 'poi-window-south',
    title: 'South Clerestory Window',
    position: [-2.5, 3.2, 1],
    category: 'light',
    badge: 'Light Analysis',
    badgeType: 'warm',
    description:
      'The south-facing clerestory window serves as the primary source of natural illumination in this section. The NeRF reconstruction captures how light behaves differently throughout the day — a quality impossible to replicate through traditional photogrammetry.',
    materialAnalysis: {
      primary: 'Selenite pane (translucent gypsum)',
      secondary: 'Marble window frame with iron muntins',
      condition: 'Fair — original selenite partially replaced',
      riskLevel: 45,
    },
    decayObservations: [
      'Iron muntin corrosion causing staining on surrounding marble',
      'Hairline cracks in selenite panes (thermal stress)',
      'Mortar loss around frame perimeter',
      'UV degradation on interior painted surfaces below',
    ],
    architecturalInsight:
      'James Turrell\'s work with light demonstrates that luminosity is not merely a practical concern but a medium for spatial experience. This window transforms the interior throughout the day, creating what Steven Holl describes as "chromatic space."',
    phenomenology:
      'The graduated light that enters creates zones of intimacy and revelation. Morning light washes the east wall in gold; afternoon light creates sharp geometric shadows that move like a sundial across the floor.',
  },
  {
    id: 'poi-floor-mosaic',
    title: 'Byzantine Floor Mosaic Fragment',
    position: [0, 0.05, 2.5],
    category: 'material',
    badge: 'Material Heritage',
    badgeType: 'emerald',
    description:
      'A surviving fragment of the original Byzantine opus sectile floor. The geometric pattern uses four distinct marble types, demonstrating the sophisticated material knowledge of 6th-century craftsmen. Wear patterns reveal centuries of processional movement.',
    materialAnalysis: {
      primary: 'Porphyry (imperial purple), Verde Antico',
      secondary: 'Giallo Antico, Pavonazzetto marble',
      condition: 'Significant wear with stable substrate',
      riskLevel: 58,
    },
    decayObservations: [
      'Surface polish loss from foot traffic (depth: 0.5-2mm)',
      'Missing tesserae in transition zones',
      'Hairline cracking in porphyry sections',
      'Moisture staining from rising damp',
    ],
    architecturalInsight:
      'The floor is architecture\'s most intimate surface — the one we physically contact. Its wear patterns are a map of human movement accumulated over centuries, a palimpsest of inhabitation that no digital scan can fully convey, yet NeRF captures its subtle depth.',
    phenomenology:
      'Running your hand across the surface reveals topography invisible to the eye — the slight depressions where millions of footsteps have polished the stone smooth, creating a haptic record of devotion.',
  },
  {
    id: 'poi-vault-apse',
    title: 'Semi-Dome Apse Vault',
    position: [0, 4.5, -4],
    category: 'structural',
    badge: 'Structural Vault',
    badgeType: 'accent',
    description:
      'The apse semi-dome represents a masterwork of Byzantine structural engineering. The thin-shell construction distributes enormous loads through a precise geometry of curves. The interior surface retains fragments of original gold-ground mosaic.',
    materialAnalysis: {
      primary: 'Brick and mortar shell construction',
      secondary: 'Gold-leaf glass mosaic tesserae',
      condition: 'Stable with localized concerns',
      riskLevel: 35,
    },
    decayObservations: [
      'Hairline cracking in mortar joints (mapped via photogrammetry)',
      'Mosaic tessera detachment in upper register',
      'Efflorescence patterns indicating moisture migration',
      'Historical repair patches visible in infrared imaging',
    ],
    architecturalInsight:
      'The semi-dome creates what Rudolf Schwarz called "a space opening toward the infinite." The curvature gathers light and attention upward, creating a phenomenological experience of transcendence through geometry alone.',
    phenomenology:
      'Standing beneath the vault, one experiences what Gaston Bachelard described as "intimate immensity" — the paradox of a constructed space that evokes the cosmic. The gold mosaic amplifies this by dematerializing the surface into pure light.',
  },
  {
    id: 'poi-wall-patina',
    title: 'North Wall — Temporal Patina',
    position: [-4, 2, 0],
    category: 'material',
    badge: 'Decay Mapping',
    badgeType: 'rose',
    description:
      'The north wall displays a rich stratigraphy of surface treatments accumulated over centuries: original Byzantine plaster, Ottoman-era painted decoration, 19th-century restoration attempts, and natural patination from environmental exposure.',
    materialAnalysis: {
      primary: 'Lime plaster (multiple campaigns)',
      secondary: 'Iron oxide and carbon-based pigments',
      condition: 'Active deterioration in sections',
      riskLevel: 82,
    },
    decayObservations: [
      'Delamination of plaster layers (2-5cm depth)',
      'Salt crystallization damage on lower 1.5m',
      'Paint layer flaking in humidity-exposed zones',
      'Biological growth in mortar joints',
    ],
    architecturalInsight:
      'Mohsen Mostafavi and David Leatherbarrow argue in "On Weathering" that aging is not decay but transformation — the building accumulating meaning through time. This wall is a living archive of architectural history.',
    phenomenology:
      'The layered surfaces create depth that draws the eye in, like geological strata. Each layer whispers of a different era, creating what Peter Zumthor calls "the temperature of a space" — the warmth of accumulated human presence.',
  },
];

// Tour camera positions for guided experience
export const tourPositions = [
  {
    position: [0, 2, 8],
    target: [0, 1.5, 0],
    label: 'Overview — The Complete Space',
    description: 'Begin with a panoramic view of the architectural volume.',
    duration: 3000,
  },
  {
    position: [3.5, 2, -1],
    target: [3.5, 1.8, -2],
    label: 'West Nave — Structural Elements',
    description: 'Examine the load-bearing columns and their deterioration.',
    duration: 4000,
  },
  {
    position: [-2, 3, 2],
    target: [-2.5, 3.2, 1],
    label: 'Clerestory — Light Study',
    description: 'Observe how natural light defines the spatial experience.',
    duration: 4000,
  },
  {
    position: [1, 1, 3.5],
    target: [0, 0.05, 2.5],
    label: 'Floor Level — Material Heritage',
    description: 'Discover the mosaic fragments at ground level.',
    duration: 4000,
  },
  {
    position: [0, 2.5, -2],
    target: [0, 4.5, -4],
    label: 'Apse Vault — Structural Mastery',
    description: 'Look up at the semi-dome and its golden mosaics.',
    duration: 4000,
  },
  {
    position: [-3, 2, 1],
    target: [-4, 2, 0],
    label: 'North Wall — Temporal Layers',
    description: 'Read the stratigraphy of centuries.',
    duration: 4000,
  },
];

// Technical explanation data
export const techData = {
  nerf: {
    title: 'Neural Radiance Fields (NeRF)',
    subtitle: 'Volumetric Scene Representation',
    description:
      'NeRF represents a scene as a continuous volumetric function learned by a neural network. Given a 3D position (x, y, z) and viewing direction (θ, φ), the network outputs color (r, g, b) and volume density (σ).',
    formula: 'F(x, y, z, θ, φ) → (r, g, b, σ)',
    keyPoints: [
      'Learns implicit 3D representation from 2D photographs',
      'Captures view-dependent effects (reflections, specularities)',
      'Produces photorealistic novel view synthesis',
      'Typically requires 50-200 input images for quality results',
      'Training time: 12-48 hours on modern GPU',
    ],
    advantages: [
      'Captures lighting and atmospheric effects',
      'Handles transparent and reflective materials',
      'Continuous representation (infinite resolution in theory)',
    ],
    limitations: [
      'Slow rendering (volumetric ray marching)',
      'High memory requirements',
      'Difficult to edit after training',
    ],
  },
  gaussianSplatting: {
    title: '3D Gaussian Splatting',
    subtitle: 'Real-Time Radiance Field Rendering',
    description:
      '3D Gaussian Splatting represents scenes as collections of 3D Gaussian primitives. Each Gaussian has a position, covariance (shape/orientation), opacity, and spherical harmonic coefficients for view-dependent color.',
    formula: 'G(x) = e^(-½(x-μ)ᵀ Σ⁻¹ (x-μ))',
    keyPoints: [
      'Explicit representation using millions of 3D Gaussians',
      'Real-time rendering through rasterization (not ray marching)',
      'Differentiable rendering enables gradient-based optimization',
      'Adaptive density control during training',
      'Typical scene: 1-5 million Gaussian primitives',
    ],
    advantages: [
      'Real-time rendering (100+ FPS on modern GPUs)',
      'High visual quality comparable to NeRF',
      'Easy to stream and render on web',
      'Supports dynamic scenes and editing',
    ],
    limitations: [
      'Large file sizes (100MB-1GB per scene)',
      'Memory intensive during training',
      'Artifacts in under-observed regions',
    ],
  },
  comparison: {
    title: 'Why Better Than Photogrammetry?',
    points: [
      {
        aspect: 'Reflections',
        traditional: 'Produces artifacts and holes',
        neural: 'Accurately captures view-dependent effects',
      },
      {
        aspect: 'Light Behavior',
        traditional: 'Baked into texture (static)',
        neural: 'Preserves temporal light variation',
      },
      {
        aspect: 'Atmosphere',
        traditional: 'Lost in reconstruction',
        neural: 'Retains volumetric atmosphere and haze',
      },
      {
        aspect: 'Thin Structures',
        traditional: 'Often missing or broken',
        neural: 'Represented through density fields',
      },
      {
        aspect: 'Rendering Quality',
        traditional: 'Mesh artifacts visible',
        neural: 'Photorealistic at any viewing angle',
      },
    ],
  },
};

// Use cases data
export const useCasesData = [
  {
    id: 'heritage',
    icon: '🏛️',
    title: 'Cultural Heritage Preservation',
    description:
      'Create permanent digital records of endangered sites. Enable remote access for researchers worldwide. Build time-series archives showing change over decades.',
    examples: [
      'Notre-Dame post-fire documentation',
      'Palmyra virtual reconstruction',
      'Venice flood damage monitoring',
    ],
  },
  {
    id: 'research',
    icon: '🔬',
    title: 'Architectural Research',
    description:
      'Study light behavior across seasons without physical presence. Track material degradation with millimeter precision. Analyze spatial proportions and acoustics computationally.',
    examples: [
      'Daylighting simulation validation',
      'Structural health monitoring',
      'Acoustic ray tracing in historic spaces',
    ],
  },
  {
    id: 'education',
    icon: '📚',
    title: 'Interactive Education',
    description:
      'Create immersive learning environments for architecture, history, and conservation students. Enable hands-on exploration of sites that are physically inaccessible.',
    examples: [
      'Virtual field trips for universities',
      'Conservation training simulations',
      'Art history spatial analysis',
    ],
  },
  {
    id: 'tourism',
    icon: '🌍',
    title: 'Virtual Tourism',
    description:
      'Offer high-fidelity virtual visits to fragile or remote sites. Reduce physical visitor pressure on endangered heritage. Create accessible experiences for mobility-impaired visitors.',
    examples: [
      'Virtual museum exhibitions',
      'Pre-visit orientation experiences',
      'Accessibility-first heritage access',
    ],
  },
  {
    id: 'restoration',
    icon: '🔧',
    title: 'Pre-Restoration Analysis',
    description:
      'Compare scans captured at different times to track deterioration. Plan interventions with precise spatial data. Create before/after documentation of conservation work.',
    examples: [
      'Change detection between survey campaigns',
      'Intervention planning and visualization',
      'Post-restoration verification',
    ],
  },
];
