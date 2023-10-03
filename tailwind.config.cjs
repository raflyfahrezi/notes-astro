/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require('daisyui')],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'aqua'],
  },
}
