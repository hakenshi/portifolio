import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'sunset-gold': {
                    '50': '#fefce8',
                    '100': '#fffbc2',
                    '200': '#fff387',
                    '300': '#ffe543',
                    '400': '#ffd319',
                    '500': '#efb803',
                    '600': '#ce8e00',
                    '700': '#a46504',
                    '800': '#884e0b',
                    '900': '#734010',
                    '950': '#432105',
                },
                'sunset-orange': {
                    '50': '#fff9ed',
                    '100': '#fff1d4',
                    '200': '#ffdfa8',
                    '300': '#ffc870',
                    '400': '#ffa437',
                    '500': '#ff901f',
                    '600': '#f06c06',
                    '700': '#c75107',
                    '800': '#9e400e',
                    '900': '#7f370f',
                    '950': '#451905',
                },
                'sunset-rose': {
                    '50': '#fff0f4',
                    '100': '#ffe2ea',
                    '200': '#ffcadb',
                    '300': '#ff9fbd',
                    '400': '#ff699b',
                    '500': '#ff2975',
                    '600': '#ed1169',
                    '700': '#c8085a',
                    '800': '#a80952',
                    '900': '#8f0c4c',
                    '950': '#500126',
                },
                'sunset-magenta': {
                    '50': '#fff3ff',
                    '100': '#fde6ff',
                    '200': '#fcccff',
                    '300': '#fca3ff',
                    '400': '#fb6dff',
                    '500': '#f222ff',
                    '600': '#dc16e3',
                    '700': '#b90ebd',
                    '800': '#990e9a',
                    '900': '#7e117c',
                    '950': '#550054',
                },
                'sunset-violet': {
                    '50': '#faf4ff',
                    '100': '#f2e5ff',
                    '200': '#e7d0ff',
                    '300': '#d5acff',
                    '400': '#bb76ff',
                    '500': '#a142ff',
                    '600': '#8c1eff',
                    '700': '#770ee2',
                    '800': '#6612b7',
                    '900': '#541093',
                    '950': '#38006f',
                },
            }

        },
    },
    plugins: [],
};
export default config;
