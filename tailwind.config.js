/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060709',
          900: '#0A0C10',
          850: '#0E1117',
          800: '#141822',
          700: '#1E2330',
          600: '#2C3446',
          500: '#475569',
        },
        brand: {
          cyan: '#00F0FF',
          blue: '#3B82F6',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(99, 102, 241, 0.2)',
        'glow-md': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.3)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'slight-shake': 'slightShake 0.5s ease-in-out',
        'subtle-wiggle': 'subtleWiggle 0.45s ease-in-out',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-up': 'slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-blur-left': 'slideBlurShakeLeft 1.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-blur-right': 'slideBlurShakeRight 1.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-blur-down': 'slideBlurDown 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slideBlurShakeLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-140px) scale(0.94)',
            filter: 'blur(14px)',
          },
          '30%': {
            opacity: '0.95',
            transform: 'translateX(18px) scale(1.02)',
            filter: 'blur(2px)',
          },
          '40%': {
            opacity: '1',
            transform: 'translateX(-12px) rotate(-1.8deg) scale(0.99)',
            filter: 'blur(0px)',
          },
          '50%': {
            transform: 'translateX(10px) rotate(1.5deg)',
            filter: 'blur(0px)',
          },
          '60%': {
            transform: 'translateX(-7px) rotate(-1.2deg)',
            filter: 'blur(0px)',
          },
          '70%': {
            transform: 'translateX(5px) rotate(0.9deg)',
            filter: 'blur(0px)',
          },
          '80%': {
            transform: 'translateX(-3px) rotate(-0.5deg)',
            filter: 'blur(0px)',
          },
          '90%': {
            transform: 'translateX(1.5px) rotate(0.2deg)',
            filter: 'blur(0px)',
          },
          '96%': {
            transform: 'translateX(-0.5px) rotate(-0.1deg)',
            filter: 'blur(0px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotate(0deg) scale(1)',
            filter: 'blur(0px)',
          },
        },
        slideBlurShakeRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(140px) scale(0.94)',
            filter: 'blur(14px)',
          },
          '30%': {
            opacity: '0.95',
            transform: 'translateX(-18px) scale(1.02)',
            filter: 'blur(2px)',
          },
          '40%': {
            opacity: '1',
            transform: 'translateX(12px) rotate(1.8deg) scale(0.99)',
            filter: 'blur(0px)',
          },
          '50%': {
            transform: 'translateX(-10px) rotate(-1.5deg)',
            filter: 'blur(0px)',
          },
          '60%': {
            transform: 'translateX(7px) rotate(1.2deg)',
            filter: 'blur(0px)',
          },
          '70%': {
            transform: 'translateX(-5px) rotate(-0.9deg)',
            filter: 'blur(0px)',
          },
          '80%': {
            transform: 'translateX(3px) rotate(0.5deg)',
            filter: 'blur(0px)',
          },
          '90%': {
            transform: 'translateX(-1.5px) rotate(-0.2deg)',
            filter: 'blur(0px)',
          },
          '96%': {
            transform: 'translateX(0.5px) rotate(0.1deg)',
            filter: 'blur(0px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotate(0deg) scale(1)',
            filter: 'blur(0px)',
          },
        },
        slideBlurDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-40px)',
            filter: 'blur(10px)',
          },
          '55%': {
            opacity: '1',
            transform: 'translateY(6px)',
            filter: 'blur(0px)',
          },
          '72%': {
            transform: 'translateY(-3px)',
          },
          '88%': {
            transform: 'translateY(1.5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0px)',
          }
        },
        slightShake: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '15%': { transform: 'translateX(-2.5px) rotate(-1.5deg)' },
          '30%': { transform: 'translateX(2.5px) rotate(1.5deg)' },
          '45%': { transform: 'translateX(-1.5px) rotate(-0.8deg)' },
          '60%': { transform: 'translateX(1.5px) rotate(0.8deg)' },
          '75%': { transform: 'translateX(-0.5px) rotate(-0.3deg)' },
        },
        subtleWiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-7deg) scale(1.06)' },
          '40%': { transform: 'rotate(7deg) scale(1.06)' },
          '60%': { transform: 'rotate(-3deg)' },
          '80%': { transform: 'rotate(3deg)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-36px)' },
          '70%': { opacity: '1', transform: 'translateX(4px)' },
          '85%': { transform: 'translateX(-1.5px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(36px)' },
          '70%': { opacity: '1', transform: 'translateX(-4px)' },
          '85%': { transform: 'translateX(1.5px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '70%': { opacity: '1', transform: 'translateY(-4px)' },
          '85%': { transform: 'translateY(1.5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
