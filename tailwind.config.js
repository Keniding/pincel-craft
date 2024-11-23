/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: 'var(--color-primary)',
          10: 'var(--color-primary-10)',
          30: 'rgba(255, 181, 232, 0.3)',
          50: 'rgba(255, 181, 232, 0.5)'
        },
        'secondary': {
          DEFAULT: 'var(--color-secondary)',
          10: 'var(--color-secondary-10)'
        }
      }
    }
  },
  plugins: []
}
