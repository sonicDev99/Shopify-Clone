/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '640px',

            md: '768px',

            lg: '1024px',

            xl: '1280px',

            '2xl': '1536px',
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                darkGreen: '#004C3F',
                brightGreen: '#008060',
                textClr: '#6B7399',
                textClrM: '#6B7177',
                h3Clr: '#212326',
            },
        },
    },
    plugins: [],
};
