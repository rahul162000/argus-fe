module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('argus website/PNG/NewHeroBg.png')",
        footer: "url('argus website/SVG/1. LOGO Vectorssmall 2.svg')",
        mapbg: "url('argus website/SVG/3. World Map (1).svg')",
        mapbg2: "url('argus website/SVG/3. World Map (1).svg')",
        aboutbg: "url('argus website/PNG/Image Thumbnail2.png')",
        servicesbg: "url('argus website/PNG/Image Thumbnail.png')",
        jobsbg: "url('argus website/PNG/Image Thumbnail1.png')",
        callus: "url('argus website/PNG/raw-2_edited.png')",
        knowbg: "url('argus website/PNG/Group 1560.jpg')",
        empofmon: "url('argus website/PNG/Overlay.png')",
        sidebar: "url('argus website/PNG/overlay.jpg')",
        shape: "url(argus website/SVG/5. Newsletter.svg)",
        shape1: "url(argus website/SVG/Path 217.svg)",
        siren: "url(argus website/SVG/siren.svg)",
        "header-bg": "url('argus website/PNG/1. Overlay 2.jpg')",
        "cta-bg": "url('argus website/PNG/1. Overlay 3.png')",
        logincar: "url(argus website/PNG/2. Hero box.png)",
        handcuffs: "url(argus website/SVG/9. Hancuffs.svg)",
        triangles: "url(argus website/SVG/Know your partner triangles.svg)",
        "overlay-copy": "url(argus website/PNG/overlay copy.png)",
        applicationBack: "url(argus website/SVG/applicationBack.svg)",
      }),
      colors: {
        "gray-1": "#F1F1F1",
        "gray-2": "#868696",
        "gray-3": "#3F3F3F",
        "red-1": "#BA0913",
        "black-1": "#1c1c1c",
        hover: "#501616",
        client: "#e8eaee",
        "mobile-nav-border": "#707070",
        "dashboard-bg": "#f5f5fb",
        "bg-card": "#edeef1",
        "green-1": "#15c277",
        "yellow-1": "#EBC700",
      },
      fontFamily: {
        "for-heading": [
          "Rajdhani",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        "for-para": [
          "Helvetica",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontSize: {
        "4xl": "2.85rem",
        number: "2.50rem",
      },
      maxWidth: {
        1200: "1130px",
        1366: "1230px",
        1500: "1500px",
        1600: "1600px",
        8: "8px",
      },
      minWidth: {
        8: "8px",
      },
      width: {
        "8-px": "8px",
      },
      height: {
        box: "30rem",
        90: "22.5rem",
      },
      boxShadow: {
        "header-outer-shadow": "3px 3px 6px 1px rgba(0, 0, 0, 0.2)",
        "button-shadow": "3px 3px 6px 1px rgba(0, 0, 0, 0.4)",
        "button-shadow-2": "3px 3px 6px 1px rgba(0, 0, 0, 0.16)",
        "button-shadow-3": "3px 3px 6px 1px rgba(0, 0, 0, 0.08)",
        "button-inner": "inset -3px -3px 6px 1px rgba(0, 0, 0, 0.20)",
        "button-inner-1": "inset 0px -3px 6px 1px rgba(0, 0, 0, 0.1)",
        speech: "5px 5px 10px 1px rgba(0, 0, 0, 0.16)",
        "speech-2": "5px 3px 10px 1px rgba(0, 0, 0, 0.08)",
        services: "inset -3px -3px 10px 1px rgba(0, 0, 0, 0.30)",
        cards: "0px 0px 10px 1px rgba(0, 0, 0, 0.16)",
        LMS: "3px 3px 6px 1px rgba(0, 0, 0, 0.30)",
        forms: "0px 3px 10px 1px rgba(0, 0, 0, 0.08)",
        "forms-1": "0px -3px 10px 1px rgba(0, 0, 0, 0.08)",
      },
      backgroundSize: {
        "stretch-x": "100% 100%",
      },
      rotate: {
        60: "60deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};