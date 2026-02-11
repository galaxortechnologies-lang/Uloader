import React, { useState } from 'react';
import { fetchVideoDetails } from '../services/downloaderService';
import { VideoMetadata } from '../types';
import FormatCard from './FormatCard';

const DownloaderUI: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<VideoMetadata | null>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error("Failed to read clipboard");
    }
  };

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setData(null);

    try {
      const result = await fetchVideoDetails(url);
      setData(result);
    } catch (error) {
      alert("Error fetching video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      {/* Title Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '10px', background: 'linear-gradient(to right, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Uloader
        </h1>
        <p style={{ opacity: 0.8 }}>Download videos from Youtube, Instagram, TikTok & more in 4K.</p>
      </div>

      {/* Input Panel */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '30px' }}>
        <form onSubmit={handleFetch} style={{ position: 'relative', display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            className="input-glass"
            placeholder="Paste video link here..." 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button 
            type="button" 
            onClick={handlePaste}
            style={{ 
              position: 'absolute', right: '100px', top: '50%', transform: 'translateY(-50%)',
              background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer' 
            }}
          >
            Paste
          </button>
          <button type="submit" className="btn-primary">
            {loading ? <div className="loader" style={{ width: '20px', height: '20px', borderWidth: '2px' }}></div> : 'GO'}
          </button>
        </form>
      </div>

      {/* Preview Panel */}
      {data && (
        <div className="glass-panel" style={{ padding: '30px', animation: 'float 0.5s ease-out' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
            
            {/* Left: Thumbnail */}
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <img src={data.thumbnailUrl} alt={data.title} style={{ width: '100%', display: 'block' }} />
                <div style={{ 
                  position: 'absolute', bottom: '10px', right: '10px', 
                  background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' 
                }}>
                  {data.duration}
                </div>
                {/* Platform Badge */}
                <div style={{ 
                  position: 'absolute', top: '10px', left: '10px', 
                  background: '#fff', color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'capitalize' 
                }}>
                  {data.platform}
                </div>
              </div>
              <h2 style={{ marginTop: '20px', fontSize: '1.2rem', lineHeight: '1.4' }}>{data.title}</h2>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', marginTop: '5px' }}>By {data.author}</p>
            </div>

            {/* Right: Download Options */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <h3 style={{ marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                Download Options
              </h3>
              
              <div style={{ maxHeight: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', paddingRight: '5px' }}>
                {data.formats.map((format) => (
                  <FormatCard key={format.id} format={format} />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default DownloaderUI;
