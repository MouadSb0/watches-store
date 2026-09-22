/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "outline-variant": "#c4c7c7",
                "on-tertiary-fixed": "#1a1c1c",
                "surface-container-high": "#e9e8e7",
                "inverse-surface": "#303031",
                "on-surface": "#1b1c1c",
                "surface-bright": "#fbf9f8",
                "secondary-fixed-dim": "#e9c176",
                "on-primary": "#ffffff",
                "tertiary-fixed": "#e2e2e2",
                "tertiary": "#000000",
                "surface-container-low": "#f5f3f3",
                "surface-container": "#efeded",
                "tertiary-container": "#1a1c1c",
                "secondary-fixed": "#ffdea5",
                "surface-variant": "#e4e2e2",
                "background": "#fbf9f8",
                "primary-fixed-dim": "#c8c6c5",
                "on-primary-container": "#858383",
                "error": "#ba1a1a",
                "outline": "#747878",
                "surface-container-highest": "#e4e2e2",
                "tertiary-fixed-dim": "#c6c6c7",
                "surface-container-lowest": "#ffffff",
                "on-secondary": "#ffffff",
                "secondary-container": "#fed488",
                "surface-dim": "#dbdad9",
                "on-tertiary-container": "#838484",
                "inverse-primary": "#c8c6c5",
                "on-secondary-fixed-variant": "#5d4201",
                "error-container": "#ffdad6",
                "primary-container": "#1c1b1b",
                "on-primary-fixed": "#1c1b1b",
                "on-tertiary-fixed-variant": "#454747",
                "on-secondary-container": "#785a1a",
                "on-error": "#ffffff",
                "on-surface-variant": "#444748",
                "primary": "#000000",
                "on-error-container": "#93000a",
                "surface-tint": "#5f5e5e",
                "primary-fixed": "#e5e2e1",
                "on-primary-fixed-variant": "#474746",
                "on-tertiary": "#ffffff",
                "on-background": "#1b1c1c",
                "on-secondary-fixed": "#261900",
                "surface": "#fbf9f8",
                "inverse-on-surface": "#f2f0f0",
                "secondary": "#775a19"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            spacing: {
                "margin-mobile": "20px",
                "margin-desktop": "64px",
                "container-max": "1440px",
                "section-padding": "120px",
                "gutter": "24px",
                "unit": "8px"
            },
            fontFamily: {
                "label-caps": ["Inter"],
                "headline-lg": ["Montserrat"],
                "price-display": ["Montserrat"],
                "display-xl": ["Montserrat"],
                "body-md": ["Inter"],
                "headline-lg-mobile": ["Montserrat"],
                "body-lg": ["Inter"],
                "headline-md": ["Montserrat"]
            },
            fontSize: {
                "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.2em", "fontWeight": "600" }],
                "headline-lg": ["40px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "700" }],
                "price-display": ["20px", { "lineHeight": "1", "letterSpacing": "0", "fontWeight": "500" }],
                "display-xl": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "700" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "headline-md": ["24px", { "lineHeight": "1.3", "letterSpacing": "0.1em", "fontWeight": "600" }]
            },
            animation: {
                "marquee-right": "marquee-right 25s linear infinite"
            },
            keyframes: {
                "marquee-right": {
                    "0%": { "transform": "translateX(100%)" },
                    "100%": { "transform": "translateX(-100%)" }
                }
            }
        },
    },
    plugins: [],
  }
