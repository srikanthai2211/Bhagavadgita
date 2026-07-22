import { useEffect, useRef, useState } from 'react';

// Returns a ref to attach to a container and whether it has ever entered the
// viewport. Used to defer mounting heavy, rarely-above-the-fold sections
// (e.g. the 3D Spline scene) so their JS/asset chunks aren't fetched until
// the user actually scrolls near them.
export function useInView<T extends HTMLElement>(rootMargin = '200px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}
