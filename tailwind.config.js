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
        // Convert RGB variables to Tailwind colors
        primary: {
          DEFAULT: 'rgb(var(--accent-primary) / <alpha-value>)',
          secondary: 'rgb(var(--accent-secondary) / <alpha-value>)',
        },
        bg: {
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--bg-tertiary) / <alpha-value>)',
          card: 'rgb(var(--bg-card) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--text-tertiary) / <alpha-value>)',
          inverse: 'rgb(var(--text-inverse) / <alpha-value>)',
        },
        border: {
          light: 'rgb(var(--border-light) / <alpha-value>)',
          medium: 'rgb(var(--border-medium) / <alpha-value>)',
          dark: 'rgb(var(--border-dark) / <alpha-value>)',
        },
      },
      fontFamily: {
        heading: ['Cabinet Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Desktop scale
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 72px
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 60px
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 48px
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 36px
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 30px
        'display-xs': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 24px
        
        // Body text
        'body-xl': ['1.25rem', { lineHeight: '1.6' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body-md': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.5' }], // 12px
      },
      spacing: {
        'section': '5rem', // 80px
        'section-lg': '6rem', // 96px
        'section-sm': '3rem', // 48px
      },
      boxShadow: {
        'custom-sm': 'var(--shadow-sm)',
        'custom-md': 'var(--shadow-md)',
        'custom-lg': 'var(--shadow-lg)',
        'custom-xl': 'var(--shadow-xl)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
    },
  },
  plugins: [],
}