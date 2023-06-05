/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '15px',
                    sm: '15px',
                    lg: '15px',
                    xl: '15px',
                    '2xl': '15px',
                },
                screens: {
                    xs: '100%',
                    sm: '100%',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                },
            },
            screens: {
                maxSm: { max: '575px' },
                // => @media (max-width: 575px) { ... }
                maxXl: { max: '1199px' },
                // => @media (max-width: 1199px) { ... }
                maxLg: { max: '991px' },
                // => @media (max-width: 991px) { ... }
                smToMd: { min: '576px', max: '767px' },
                sm: '576px',
                // => @media (min-width: 576px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '992px',
                // => @media (min-width: 992px) { ... }

                xl: '1200px',
                // => @media (min-width: 1200px) { ... }

                '2xl': '1400px',
                // => @media (min-width: 1400px) { ... }

                '3xl': '1600px',
                // => @media (min-width: 1600px) { ... }
            },
        },
    },
    plugins: [],
};
