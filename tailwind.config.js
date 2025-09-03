/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.4s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.4s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.4s ease-out forwards',
        'slide-in-top': 'slideInFromTop 0.5s ease-out forwards',
        'slide-in-bottom': 'slideInFromBottom 0.5s ease-out forwards',
        'bounce-in': 'bounceIn 0.5s ease-out forwards',
        'icon-bounce': 'icon-bounce 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(15px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-15px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(15px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInScale: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' }
        },
        slideInFromTop: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInFromBottom: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'icon-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-3px)' }
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(59, 130, 246, 0)' },
          '50%': { boxShadow: '0 0 8px rgba(59, 130, 246, 0.3)' }
        }
      }
    },
  },
  plugins: [],
}
