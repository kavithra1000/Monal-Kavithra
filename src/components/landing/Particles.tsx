import React from 'react';

const PARTICLE_COUNT = 40;

// Generate particles once outside the component
const generateParticles = () => {
  return Array.from({ length: PARTICLE_COUNT }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
  }));
};

const particles = generateParticles();

const Particles: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
