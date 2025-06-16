/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'liquid-flow': 'liquidFlow 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'bubble': 'bubble 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease-in-out infinite',
      },
      keyframes: {
        liquidFlow: {
          '0%, 100%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(0deg) scale(1)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          },
          '25%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(90deg) scale(1.1)',
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
          },
          '50%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(180deg) scale(0.9)',
            borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%'
          },
          '75%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(270deg) scale(1.05)',
            borderRadius: '60% 40% 60% 30% / 70% 30% 60% 40%'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        bubble: {
          '0%': { transform: 'translateY(100vh) scale(0)' },
          '50%': { transform: 'translateY(50vh) scale(1)' },
          '100%': { transform: 'translateY(-10vh) scale(0)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'liquid': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}