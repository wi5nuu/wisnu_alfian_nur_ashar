/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				sage: {
					50: '#f0f5f6',
					100: '#e0ecee',
					200: '#c0dce1',
					300: '#9dbfc8',
					400: '#7a9fac',
					500: '#5d8a95',
					600: '#4a6f78',
					700: '#3d5a61',
					800: '#33484d',
					900: '#2a3b3e',
				},
				white: {
					DEFAULT: '#f8fafc',
					50: '#ffffff',
					100: '#f8fafc',
					200: '#f1f5f9',
					300: '#e2e8f0',
				},
				cream: {
					DEFAULT: '#f6f7f8',
					100: '#f6f7f8',
					200: '#eaeff2',
					300: '#dce5e8',
				},
				charcoal: {
					DEFAULT: '#2d3336',
				}
			},
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
				serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
