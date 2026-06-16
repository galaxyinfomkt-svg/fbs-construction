'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  variant = 'up',
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const variantClass =
    variant === 'left'
      ? 'reveal reveal-left'
      : variant === 'right'
        ? 'reveal reveal-right'
        : variant === 'scale'
          ? 'reveal reveal-scale'
          : 'reveal';

  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
