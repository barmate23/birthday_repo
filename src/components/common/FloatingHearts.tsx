import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  type: 'heart' | 'petal' | 'sparkle';
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingHearts: React.FC<{ count?: number; density?: 'low' | 'normal' }> = ({
  count = 18,
  density = 'normal'
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const total = density === 'low' ? 10 : count;
    const generated: Particle[] = [];
    const types: ('heart' | 'petal' | 'sparkle')[] = ['heart', 'petal', 'sparkle', 'petal'];

    for (let i = 0; i < total; i++) {
      generated.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        left: Math.random() * 100, // percentage
        size: Math.random() * 14 + 10,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.45 + 0.2,
      });
    }
    setParticles(generated);
  }, [count, density]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-40px] will-change-transform"
          style={{
            left: `${p.left}%`,
            animation: `floatUpward ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.type === 'heart' && (
            <svg
              className="text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]"
              style={{ width: `${p.size}px`, height: `${p.size}px` }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {p.type === 'petal' && (
            <svg
              className="text-rose-500/80 drop-shadow-[0_0_6px_rgba(225,29,72,0.3)] transform rotate-12"
              style={{ width: `${p.size * 1.2}px`, height: `${p.size * 1.5}px` }}
              viewBox="0 0 30 40"
              fill="currentColor"
            >
              <path d="M15 0 C25 15, 30 25, 20 38 C12 42, 2 35, 1 20 C0 8, 8 2, 15 0 Z" />
            </svg>
          )}

          {p.type === 'sparkle' && (
            <div
              className="rounded-full bg-champagne-300 drop-shadow-[0_0_8px_#ffd875]"
              style={{
                width: `${Math.max(4, p.size * 0.35)}px`,
                height: `${Math.max(4, p.size * 0.35)}px`,
              }}
            />
          )}
        </div>
      ))}

      <style>{`
        @keyframes floatUpward {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: var(--tw-opacity, 0.4);
          }
          50% {
            transform: translateY(-50vh) rotate(180deg) translateX(25px);
          }
          90% {
            opacity: var(--tw-opacity, 0.4);
          }
          100% {
            transform: translateY(-110vh) rotate(360deg) translateX(-25px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
