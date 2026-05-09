'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const MagneticCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      gsap.to(ring, {
        x: clientX - 20,
        y: clientY - 20,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.2 });
    };

    const onMouseEnterLink = () => {
      document.body.classList.add('cursor-active');
      gsap.to(ring, { scale: 1.5, borderColor: 'rgba(229, 229, 231, 0.8)', duration: 0.3 });
    };

    const onMouseLeaveLink = () => {
      document.body.classList.remove('cursor-active');
      gsap.to(ring, { scale: 1, borderColor: 'rgba(229, 229, 231, 0.3)', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, .interactive, .cursor-pointer');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};
