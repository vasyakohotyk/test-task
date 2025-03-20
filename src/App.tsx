import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/Header'; 
import Loader from './components/Loader/Loader';

const InteractiveWorkspace = lazy(() => import('./BlockDrag&Drop/pages/FreeMoveWorkspace'));
const BitcoinTracker = lazy(() => import('./BitcoinTracker/pages/BitcoinTracker'));


function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Suspense fallback={<Loader/>}>
            <Routes>
            <Route path="/" element={<Navigate to="/interactive" replace />} />
              <Route path="/interactive" element={<InteractiveWorkspace />} />
              <Route path="/bitcoin" element={<BitcoinTracker />} />
            </Routes>
          </Suspense>
        </main>
       
      </div>
    </Router>
  );
}

export default App;
