import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = anchor.getAttribute('href');
        // Only attempt to scroll if target is a valid selector (more than just '#')
        if (target && target.length > 1) {
          const targetElement = document.querySelector(target);
          if (targetElement && targetElement instanceof HTMLElement) {
            lenis.scrollTo(targetElement, { offset: -80, duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
          }
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);
};