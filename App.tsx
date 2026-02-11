import React from 'react';
import DownloaderUI from './components/DownloaderUI';

const App: React.FC = () => {
  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', padding: '20px', display: 'flex', alignItems: 'center' }}>
      {/* Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      
      <DownloaderUI />
      
      <footer style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem', left: 0 }}>
        © 2026 Uloader Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
