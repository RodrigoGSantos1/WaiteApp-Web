import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F2F2F2',
        foreground: '#333333',
        primary: '#D73035',
        secondary: ' #8A1114',
        tertiary: '#FFABAD',
        gray: {
          900: '#333333',
          700: '#666666',
          500: '#999999',
          300: '#CCCCCC',
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F2F2F2',
        },
      },
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
      },
      fontSize: {
        display: ['56px', { lineHeight: '120%', fontWeight: '600' }],
        h1: ['48px', { lineHeight: '120%', fontWeight: '600' }],
        h2: ['40px', { lineHeight: '120%', fontWeight: '600' }],
        h3: ['32px', { lineHeight: '120%', fontWeight: '400' }],
        h4: ['24px', { lineHeight: '120%', fontWeight: '600' }],
        h5: ['20px', { lineHeight: '120%', fontWeight: '400' }],
        h6: ['16px', { lineHeight: '120%', fontWeight: '400' }],
        large: ['18px', { lineHeight: '150%', fontWeight: '400' }],
        medium: ['16px', { lineHeight: '150%', fontWeight: '400' }],
        small: ['14px', { lineHeight: '150%', fontWeight: '400' }],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
