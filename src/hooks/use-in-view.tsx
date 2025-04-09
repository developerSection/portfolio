
import { useEffect, useState, RefObject } from 'react';

interface InViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
  delay?: number;
}

export function useInView(
  ref: RefObject<Element>,
  options: InViewOptions = {}
): { isInView: boolean; hasBeenInView: boolean } {
  const { root = null, rootMargin = '0px', threshold = 0, once = false, delay = 0 } = options;
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          if (delay > 0) {
            const timeout = setTimeout(() => {
              setIsInView(true);
              setHasBeenInView(true);
              
              if (once) {
                observer.disconnect();
              }
            }, delay);
            
            return () => clearTimeout(timeout);
          } else {
            setIsInView(true);
            setHasBeenInView(true);
            
            if (once) {
              observer.disconnect();
            }
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { root, rootMargin, threshold }
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold, once, delay]);
  
  return { isInView, hasBeenInView };
}
