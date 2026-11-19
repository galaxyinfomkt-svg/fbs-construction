'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * Lifts content into place as it enters the viewport. It animates `y` only:
 * content keeps full opacity, so it is visible in the server HTML and never
 * gets stuck invisible on browsers where the observer misfires.
 */
export function Rise({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'figure';
}) {
  const reduce = useReducedMotion();
  const Tag = as === 'li' ? motion.li : as === 'figure' ? motion.figure : motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay }}
    >
      {children}
    </Tag>
  );
}
