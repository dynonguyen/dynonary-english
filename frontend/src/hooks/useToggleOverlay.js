import { useEffect } from 'react';

function useToggleOverlay() {
  useEffect(() => {
    const overplayEl = document.getElementById('_overlay');
    if (overplayEl) {
      overplayEl.style.display = 'block';
    }
    return () => {
      if (overplayEl) {
        overplayEl.style.display = 'none';
      }
    };
  }, []);

  return true;
}

export default useToggleOverlay;
