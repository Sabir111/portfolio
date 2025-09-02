import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleSystem = ({ particleCount = 50, isDark = false }) => {
  const containerRef = useRef(null);

  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    return particles;
  };

  const particles = generateParticles();

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-blue-400/30 to-purple-400/30' 
              : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, -100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, particle.opacity, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute ${
            isDark 
              ? 'bg-gradient-to-br from-cyan-400/10 to-pink-400/10' 
              : 'bg-gradient-to-br from-cyan-500/10 to-pink-500/10'
          } backdrop-blur-sm`}
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${Math.random() * 60 + 40}px`,
            height: `${Math.random() * 60 + 40}px`,
            borderRadius: i % 2 === 0 ? '50%' : '20%',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Cosmic dust effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: isDark
            ? `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)`
            : `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.05) 0%, transparent 50%),
               radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.05) 0%, transparent 50%)`,
        }}
        animate={{
          backgroundPosition: [
            '0% 50%, 100% 50%, 50% 0%',
            '100% 50%, 0% 50%, 50% 100%',
            '0% 50%, 100% 50%, 50% 0%',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ParticleSystem;
