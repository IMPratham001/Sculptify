"use client";

import { useEffect, useRef } from 'react';

interface UseMagneticProps {
  strength?: number;
}

export function useMagnetic({ strength = 40 }: UseMagneticProps = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const middleX = width / 2;
      const middleY = height / 2;
      
      const offsetX = ((x - middleX) / middleX) * strength;
      const offsetY = ((y - middleY) / middleY) * strength;
      
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
}