'use client';
import { useState, useRef, ReactElement } from 'react';
import { ArrowRight } from 'lucide-react';

interface CursorPosition {
  x: number;
  y: number;
}

interface HeroBtnProps {
  children: ReactElement;
}

const HeroBtn = ({children}: HeroBtnProps) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState<number>(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };
  
  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div>
        {children}
        <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-9 py-2 text-xs uppercase text-white"
        >
            {/* Radial gradient hover effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                }}
            />
            <p className="relative z-20 flex items-center gap-1">Get Started    <ArrowRight /></p>
        </div>
    </div>
  )
}

export default HeroBtn;