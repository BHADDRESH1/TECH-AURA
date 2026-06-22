/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = '', duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quartic ease-out count speed curve for satisfying weight drop
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.floor(easeProgress * end);
      
      setCount(currentVal);
      countRef.current = currentVal;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
