import React, { useEffect } from 'react';

// set title for component
function useTitle(title = 'Dynonary') {
  useEffect(() => {
    document.title = title !== 'Dynonary' ? `${title} - Dynonary` : title;
  }, []);

  return null;
}

export default useTitle;
