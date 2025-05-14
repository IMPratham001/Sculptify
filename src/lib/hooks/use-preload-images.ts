import { useEffect } from 'react';
import { preloadImages } from '@/lib/utils/performance';

export function usePreloadImages(imageSrcs: string[]) {
  useEffect(() => {
    preloadImages(imageSrcs).catch(console.error);
  }, [imageSrcs]);
}