import React from 'react';
import Calculator from './components/Calculator';
import FloatingOrbs from './components/FloatingOrbs';
import BubbleParticles from './components/BubbleParticles';

function App() {
  return (
    <div className="min-h-screen liquid-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingOrbs />
      <BubbleParticles />
      
      {/* Liquid Flow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 rounded-full animate-liquid-flow"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-full animate-liquid-flow" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/25 via-purple-400/25 to-cyan-400/25 rounded-full animate-liquid-flow" style={{ animationDelay: '10s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="text-center">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 display-glow animate-pulse-glow">
              Liquid
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
              Premium Calculator Experience
            </p>
          </div>

          {/* Calculator */}
          <Calculator />

          {/* Footer */}
          <div className="mt-8 text-white/60 text-sm">
            <p>Designed with modern liquid aesthetics</p>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-cyan-500/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
}

export default App;