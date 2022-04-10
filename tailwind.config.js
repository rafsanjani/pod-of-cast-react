module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'xs': '460px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        letterSpacing:{
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.25em',
        },
        extend: {},

    },
    plugins: [],
}
