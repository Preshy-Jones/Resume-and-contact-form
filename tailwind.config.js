module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#D47C13",
				secondary: "#004858",
				third: "#6CCEE31A",
				fourth: "#C4C4C4",
				fifth: "#323232",
				sixth: "#000000",
				seventh: "rgba(0, 0, 0, 0.2)",
				eight: "#EBEBEB",
				star: "#FFAB48",
				ninth: "#EC340C",
				tenth: "#00AEFF",
			},
			fontFamily: {
				body: ["Montserrat"],
				poppins: ["'Poppins', sans-serif"],
			},
			fontSize: {
				xxxs: ["0.5rem", { lineHeight: "0.7rem" }],
				xxs: ["0.625rem", { lineHeight: "0.8rem" }],
				"3.5xl": ["2rem", { lineHeight: "2rem" }],
				"1.5xl": ["1.3125rem", { lineHeight: "1.75rem" }],
				"6.5xl": ["4rem", { lineHeight: "1" }],
			},
			boxShadow: {
				card: "0px 4px 10px 5px rgba(230, 230, 230, 0.5)",
				bigCard: "0px 4px 10px 5px rgba(219, 219, 219, 0.25)",
			},
			borderRadius: {
				primary: "1.875rem",
				secondary: "50%",
				lgx: "0.625rem",
				third: "0.3125rem",
			},
			spacing: {
				1.3: "0.3rem",
				2.3: "0.60rem",
				2.7: "0.677rem",
				90: "22rem",
				120: "31.25rem",
			},
			zIndex: {
				1: "1",
			},
			flex: {
				2: "2 1 0%",
				3: "3 1 0%",
				4: "4 1 0%",
				5: "5 1 0%",
				6: "2 1 0%",
				7: "7 1 0%",
				8: "8 1 0%",
				9: "9 1 0%",
				10: "10 1 0%",
			},
			width: {
				primary: "18%",
				secondary: "60%",
				third: "24%",
				fourth: "48%",
				fifth: "15vw",
			},
			minHeight: {
				primary: "41.5rem",
			},
			maxWidth: {
				primary: "10rem",
				secondary: "15rem",
				third: "13rem",
			},
			objectPosition: {
				primary: "28% 0",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
