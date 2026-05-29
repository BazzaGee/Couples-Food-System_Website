/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF6EE',
          dark: '#F5F0E6'
        },
        sage: {
          DEFAULT: '#7A9E7E',
          dark: '#5A7E5E',
          light: '#9ABE9E'
        },
        terracotta: {
          DEFAULT: '#E8A87C',
          dark: '#C88A5C',
          light: '#F8C89C'
        },
        text: {
          primary: '#2C3E2D',
          secondary: '#6B7B6C'
        },
        border: '#E5E1DA',
        error: '#E07A5F',
        success: '#7A9E7E',
        v2: {
          surface: '#ebffe7',
          'surface-dim': '#cae0c8',
          'surface-bright': '#ebffe7',
          'surface-container-lowest': '#ffffff',
          'surface-container-low': '#e4fae1',
          'surface-container': '#def4db',
          'surface-container-high': '#d8eed6',
          'surface-container-highest': '#d3e8d0',
          primary: '#44664a',
          'on-primary': '#ffffff',
          'primary-container': '#7a9e7e',
          'on-primary-container': '#13341c',
          'inverse-primary': '#aad0ad',
          secondary: '#85532e',
          'on-secondary': '#ffffff',
          'secondary-container': '#febb8e',
          'on-secondary-container': '#794925',
          tertiary: '#615e57',
          'on-surface': '#0e1f10',
          'on-surface-variant': '#424842',
          outline: '#727971',
          'outline-variant': '#c2c8bf',
          'text-primary': '#0e1f10',
          'text-secondary': '#424842',
          border: '#c2c8bf'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow-shift': 'glowShift 10s ease-in-out infinite',
        'glow-subtle': 'glowShiftSubtle 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowShift: {
          '0%, 100%': { backgroundColor: 'rgba(122, 158, 126, 0.08)' },
          '50%': { backgroundColor: 'rgba(232, 168, 124, 0.08)' },
        },
        glowShiftSubtle: {
          '0%, 100%': { backgroundColor: 'rgba(122, 158, 126, 0.05)' },
          '50%': { backgroundColor: 'rgba(232, 168, 124, 0.05)' },
        },
        pulseGlow: {
          '0%, 100%': {
            textShadow: '0 0 4px rgba(122, 158, 126, 0.3)',
            color: '#7A9E7E',
          },
          '50%': {
            textShadow: '0 0 8px rgba(232, 168, 124, 0.4)',
            color: '#E8A87C',
          },
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
};
