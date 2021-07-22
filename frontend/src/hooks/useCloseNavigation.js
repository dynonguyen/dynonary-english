import { useEffect } from 'react';

function useCloseNavigation() {
  useEffect(() => {
    document.getElementById('dynoNav').style.display = 'none';
    return () => {
      document.getElementById('dynoNav')?.removeAttribute('style');
    };
  }, []);

  return null;
}

export default useCloseNavigation;
