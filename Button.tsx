import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps {
  value: string;
  onClick: () => void;
  className?: string;
  variant?: 'number' | 'operator' | 'function';
}

const Button: React.FC<ButtonProps> = ({ 
  value, 
  onClick, 
  className = '', 
  variant = 'number' 
}) => {
  const baseClasses = "button-glass rounded-2xl h-16 flex items-center justify-center text-xl font-semibold transition-all duration-300 ripple-effect relative overflow-hidden";
  
  const variantClasses = {
    number: "text-white hover:text-white",
    operator: "text-orange-300 hover:text-orange-200 bg-gradient-to-r from-orange-500/20 to-pink-500/20",
    function: "text-blue-300 hover:text-blue-200 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)"
      }}
      whileTap={{ 
        scale: 0.95,
        boxShadow: "0 5px 15px rgba(255, 255, 255, 0.05)"
      }}
      onClick={onClick}
      className={clsx(baseClasses, variantClasses[variant], className)}
    >
      {/* Button content */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        {value}
      </motion.span>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/10 to-transparent transform -skew-y-12 transition-transform duration-700 hover:translate-y-full" />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0"
        whileHover={{ opacity: 1 }}
        style={{
          background: variant === 'operator' 
            ? 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, transparent 70%)'
            : variant === 'function'
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
        }}
      />
      
      {/* Click ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
        }}
      />
    </motion.button>
  );
};

export default Button;