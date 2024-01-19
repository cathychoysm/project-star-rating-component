/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
	screens: {
		"desktop": "780px"
	},
	extend: {
		fontFamily: {
			"heading": ["Merriweather"],
			"p": ["Poppins"],
		},
		colors: {
			"bg-purple": "#E6E9FB",
			"text-gray": "#374151",
			"star-yellow": "#FACC15",
			"star-gray": "#E2E8F0",
		},
		boxShadow: {
			"card": "10px 10px 4px 0 rgb(255,255,255,0.4)"
		}
	}
  },
  plugins: [],
}