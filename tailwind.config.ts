import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.hide-scrollbar': {
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Firefox */
          'scrollbar-width': 'none',
          /* IE 10+ */
          '-ms-overflow-style': 'none',
        },
      });
    },
  ],
};
export default config;
