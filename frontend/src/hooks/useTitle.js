import { useEffect, useState } from 'react';

// set title for component
function useTitle(title = 'Dynonary', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title = title !== 'Dynonary' ? `${title} - Dynonary` : title;
    }
  }, []);

  return null;
}

export default useTitle;
