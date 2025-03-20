import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    if (window.innerWidth > 800) {
      setMenuOpen(false);
    }

    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleRouteChange = (route: string) => {
    setMenuOpen(false);
    navigate(route);
  };

  const isActiveRoute = (route: string) => location.pathname === route;

  return (
    <header style={{
      background: '#4f4e4e',
      color: '#fff',
      padding: '25px 30px',
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: '600',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <nav style={{
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
        }}>
          <Link to="/interactive" 
            style={{
              marginRight: '30px',
              color: isActiveRoute('/interactive') ? '#f1c40f' : '#fff', 
              textDecoration: 'none',
            }} 
            onClick={() => handleRouteChange('/interactive')}>
            Interactive Workspace 
          </Link>
          <Link to="/bitcoin" 
            style={{
              marginRight: '30px',
              color: isActiveRoute('/bitcoin') ? '#f1c40f' : '#fff',  
              textDecoration: 'none',
            }} 
            onClick={() => handleRouteChange('/bitcoin')}>
            Bitcoin Tracker
          </Link>
        </nav>

        {isMobile && (
          <div 
            className="burger-menu" 
            onClick={toggleMenu} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '30px',
              height: '25px',
              cursor: 'pointer',
              position: 'absolute',
              right: '30px', 
            }}
          >
            <div style={{
              background: '#fff',
              height: '5px',
              width: '100%',
            }}></div>
            <div style={{
              background: '#fff',
              height: '5px',
              width: '100%',
            }}></div>
            <div style={{
              background: '#fff',
              height: '5px',
              width: '100%',
            }}></div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ type: 'tween', duration: 1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100vh',
              backgroundColor: '#4f4e4e',
              opacity: 0.9,
              textAlign: 'center',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                cursor: 'pointer',
              }}
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </div>
            <div style={{ marginTop: '100px' }}>
              <Link to="/interactive" 
                style={{
                  color: isActiveRoute('/interactive') ? '#f1c40f' : '#fff', 
                  textDecoration: 'none',
                  marginBottom: '20px',
                  display: 'block',
                }} 
                onClick={() => handleRouteChange('/interactive')}>
                Interactive Workspace
              </Link>
              <Link to="/bitcoin" 
                style={{
                  color: isActiveRoute('/bitcoin') ? '#f1c40f' : '#fff',
                  textDecoration: 'none',
                  display: 'block',
                }} 
                onClick={() => handleRouteChange('/bitcoin')}>
                Bitcoin Tracker
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
