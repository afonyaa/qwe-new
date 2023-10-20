/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import rippleui from 'rippleui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [rippleui],
};
