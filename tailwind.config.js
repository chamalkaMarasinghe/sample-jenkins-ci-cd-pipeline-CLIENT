module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)", 
        "light-black": "#333333",
        "subheadings": "#1B1A1A",
        "dark-black": "#2B2B2B",
        "deep-black": "#070708",
        "dark-gray": "#334155",
        "light-gray": "#5C5F6A",
        "deep-gray": "#1E1E1E",
        "gray-80": "#626262",
        "light-red": "#E31919",
        "light-orange": "#FEBE99",
        "user-orange": "#F65F18",
        "user-black": "#313131",
        "user-gray": "#999999",
        "dark-orange": "#F65F18",
        "headings-1": "var(--color-text)", 
        "content-color": "#4A4A4A",
        // background: "var(--color-background)",
      },
    //   backgroundImage: {
    //     'primary-gradient': 'var(--gradient-primary)',
    //     'success-gradient': 'var(--gradient-success)',
    //     'error-gradient': 'var(--gradient-error)',
    // },
      fontFamily: {
        // sf_pro: ["SF Pro Display", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        // nonito_sans: ["Nunito Sans", "sans-serif"],
        // open_sans: ["Open Sans", "sans-serif"],
        // noto_sans: ["Noto Sans", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "custom-w-br-320": "320px",
        "custom-w-br-360": "360px",
        xs: "375px",
        "custom-w-br-380": "380px",
        "custom-w-br-480": "480px",
        "custom-w-br-520": "520px",
        sm: "640px",
        "custom-w-br-680": "680px",
        "custom-w-br-768": "768px",
        ml: "860px",
        "custom-w-br-920": "920px",
        "custom-w-br-1130": "1130px",
        "custom-w-br-1180": "1180px",
        "custom-w-br-1366": "1366px",
        "custom-w-br-1400": "1400px",
        "custom-w-br-1440": "1440px",
        'custom-w-br-1450': '1450px',
      },
      fontSize: {
        "heading": "52px", 
        "subheading": "32px", 
        "content": "16px", 
        "sub-content": "14px", 
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Thin scrollbar
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
        },
        // Webkit scrollbar customization
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "10px",
            margin: "25px 25px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "var(--color-background)", // Uses theme background
            boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--color-primary)", // Uses theme primary color
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#A7F3D0",
          },
        },
        // Webkit scrollbar with no radius
        ".scrollbar-no-radius": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "var(--color-background-alt)", // Uses theme background-alt
            boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "0px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--color-content-03)", // Uses theme content-03
            borderRadius: "0px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#A3A3A3",
          },
        },
        // Hide scrollbar completely
        ".scrollbar-none": {
          scrollbarWidth: "none", // For Firefox
          "-ms-overflow-style": "none", // For Internet Explorer and Edge
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and WebKit browsers
          },
        },
        // Chat scrollbar
        ".scrollbar-chat": {
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "var(--color-background)", // Uses theme background
            boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "0px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--color-text)", // Uses theme text
            borderRadius: "0px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};