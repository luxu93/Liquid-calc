import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs: React.FC = () => {
  const orbs = [
    { size: 'w-32 h-32', color: 'bg-gradient-to-r from-purple-400/30 to-pink-400/30', delay: 0 },
    { size: 'w-24 h-24', color: 'bg-gradient-to-r from-blue-400/25 to-cyan-400/25', delay: 2 },
    { size: 'w-40 h-40', color: 'bg-gradient-to-r from-pink-400/20 to-purple-400/20', delay: 4 },
    { size: 'w-20 h-20', color: 'bg-gradient-to-r from-cyan-400/35 to-blue-400/35', delay: 1 },
    { size: 'w-28 h-28', color: 'bg-gradient-to-r from-purple-400/25 to-cyan-400/25', delay: 3 },
    { size: 'w-36 h-36', color: 'bg-gradient-to-r from-pink-400/15 to-orange-400/15', delay: 5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-sm ${orb.size} ${orb.color}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;