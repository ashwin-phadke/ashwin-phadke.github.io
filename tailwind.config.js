import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [
        typography,
        animate
    ],
}
