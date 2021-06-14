import React, { useEffect } from 'react';

function useToggleOverlay() {
  useEffect(() => {
    document.getElementById('_overlay').style.display = 'block';
    return () => {
      document.getElementById('_overlay').style.display = 'none';
    };
  }, []);

  return true;
}

export default useToggleOverlay;
