import React from 'react';
import { Format } from '../types';

interface Props {
  format: Format;
}

const FormatCard: React.FC<Props> = ({ format }) => {
  const isAudio = format.ext === 'mp3';
  
  const handleDownload = () => {
    alert(`Starting download for: ${format.resolution} .${format.ext}`);
    // In real app: window.location.href = format.url;
  };

  return (
    <div 
      onClick={handleDownload}
      className="glass-panel"
      style={{
        padding: '12px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: isAudio ? 'rgba(255, 165, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)',
        transition: 'background 0.3s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
      onMouseLeave={(e) => e.currentTarget.style.background = isAudio ? 'rgba(255, 165, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ 
          background: isAudio ? '#ff9f43' : '#00d2d3', 
          padding: '6px 10px', 
          borderRadius: '8px', 
          fontSize: '0.8rem', 
          fontWeight: 'bold',
          color: '#000'
        }}>
          {format.ext.toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 600 }}>{format.resolution}</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>{format.hasAudio ? 'Video + Audio' : 'Audio Only'}</span>
        </div>
      </div>
      
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{format.size}</div>
        <div style={{ fontSize: '1.2rem', color: '#00f260' }}>↓</div>
      </div>
    </div>
  );
};

export default FormatCard;
