import { type MotionProps } from 'framer-motion';

export const fadeIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay }
});

export const slideUp = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay }
});

export const slideIn = (direction: 'left' | 'right', delay: number = 0): MotionProps => ({
  initial: { 
    opacity: 0, 
    x: direction === 'left' ? -20 : 20 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.8, 
    delay 
  }
});

export const scaleIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.8, 
    delay,
    type: 'spring',
    stiffness: 100
  }
});

export const staggerChildren = (staggerDelay: number = 0.1): MotionProps => ({
  initial: 'initial',
  animate: 'animate',
  variants: {
    animate: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }
});