
import { useEffect, useRef } from 'react';

interface BubblesProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  containerClass?: string;
}

const Bubbles: React.FC<BubblesProps> = ({
  count = 20,
  minSize = 20,
  maxSize = 60,
  minDuration = 10,
  maxDuration = 25,
  containerClass = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Initial bubble creation
    for (let i = 0; i < count; i++) {
      createBubble(container);
    }
    
    // Continue creating bubbles periodically
    const interval = setInterval(() => {
      if (container.childElementCount < count) {
        createBubble(container);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [count, minSize, maxSize, minDuration, maxDuration]);
  
  const createBubble = (container: HTMLElement) => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size between minSize and maxSize
    const size = Math.random() * (maxSize - minSize) + minSize;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random horizontal position across full width
    const containerWidth = window.innerWidth;
    const left = Math.random() * containerWidth;
    bubble.style.left = `${left}px`;
    
    // Random animation duration
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;
    bubble.style.animationDuration = `${duration}s`;
    
    container.appendChild(bubble);
    
    // Remove bubble after animation completes
    setTimeout(() => {
      if (bubble.parentNode === container) {
        container.removeChild(bubble);
      }
    }, duration * 1000);
  };
  
  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${containerClass}`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    />
  );
};

export default Bubbles;
