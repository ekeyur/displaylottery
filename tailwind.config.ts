import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%' : { transform: 'rotate(-5deg)'},
          '50%': {transform: 'rotate(5deg)'}
        },
        heartBeat: {
          '0%': {transform: 'scale(.96);'},
          '20%':{transform: 'scale(1);'},
          '40%':{transform: 'scale(.96);'},
          '60%':{transform: 'scale(1);'},
          '80%':{transform: 'scale(.96);'},
        }
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
        heartBeat: 'heartBeat infinite 5s'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
