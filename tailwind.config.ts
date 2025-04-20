import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-in-out 0.3s forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        expand: 'expand 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        expand: {
          '0%': { width: '0' },
          '100%': { width: '33.333333%' },
        },
      },
    },
  },
}

export default config
