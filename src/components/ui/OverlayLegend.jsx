import React from 'react';
import useStore from '../../store/useStore';
import './OverlayLegend.css';

export default function OverlayLegend() {
  const overlayMode = useStore((s) => s.overlayMode);

  if (overlayMode === 'none') return null;

  const legends = {
    material: {
      title: 'Material Analysis Mode',
      description: 'Surfaces are color-coded by material composition',
      items: [
        { color: '#a0d8f0', label: 'Stone / Marble' },
        { color: '#70d0a0', label: 'Floor Substrate' },
        { color: '#c0b8d0', label: 'Plaster / Render' },
        { color: '#d0c8a0', label: 'Brick / Masonry' },
      ],
    },
    decay: {
      title: 'Decay Mapping Mode',
      description: 'Areas highlighted by deterioration severity',
      items: [
        { color: '#f07070', label: 'High Risk (>70%)' },
        { color: '#e08060', label: 'Moderate Risk (40-70%)' },
        { color: '#d0a060', label: 'Low Risk (<40%)' },
        { color: '#c07050', label: 'Active Deterioration' },
      ],
    },
    light: {
      title: 'Light Intensity Mode',
      description: 'Zones mapped by luminance levels',
      items: [
        { color: '#f0e070', label: 'Direct Light' },
        { color: '#f0d870', label: 'Diffuse Light' },
        { color: '#d0c060', label: 'Ambient Light' },
        { color: '#a09040', label: 'Shadow Zone' },
      ],
    },
  };

  const legend = legends[overlayMode];
  if (!legend) return null;

  return (
    <div className="overlay-legend glass-panel-light animate-fade-in">
      <div className="legend-header">
        <span className="legend-title">{legend.title}</span>
        <span className="legend-desc">{legend.description}</span>
      </div>
      <div className="legend-items">
        {legend.items.map((item, i) => (
          <div key={i} className="legend-item">
            <span
              className="legend-swatch"
              style={{ background: item.color }}
            />
            <span className="legend-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
